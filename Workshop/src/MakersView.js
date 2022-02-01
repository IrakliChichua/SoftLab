import React, {useEffect, useState} from 'react';
import {Button, ButtonToolbar, Table} from "react-bootstrap";
import api from "./api";
import AddCategoryModal from "./AddCategoryModal";
import AddMakerModal from "./AddMakerModal";


function MakersView(props) {

    const [makers, setMakers] = useState([])
    const [showModal, setShowModal] = useState(false)

    useEffect(() => {
        getMakers().catch(console.error)
    }, [])

    async function getMakers() {
        const res = await api.get("makers")
        setMakers(res.data)
    }

    async function addNewMaker(e) {
        const {maker_name} = e
        const res = await api.post("makers", {
            maker_name
        })
        await getMakers()
    }

    const Maker = ({id, maker_name}) => (
        <>
            <td>{id}</td>
            <td>{maker_name}</td>
        </>
    )

    return (
        <>
            <ButtonToolbar className="justify-content-end m-3">
                <Button variant="primary" type="submit" onClick={() => setShowModal(true)}>
                    Add Maker
                </Button>
            </ButtonToolbar>
            <Table striped bordered hover className="m-3">
                <thead>
                <tr>
                    <th>id</th>
                    <th>maker_name</th>
                </tr>
                </thead>
                <tbody>
                {
                    makers.map(maker => (
                        <tr key={maker.id}>
                            <Maker  {...maker}/>
                        </tr>
                    ))
                }
                </tbody>

            </Table>
            <AddMakerModal addNewMaker={addNewMaker} showModal={showModal} setShowModal={setShowModal}/>
        </>

    );
}

export default MakersView;