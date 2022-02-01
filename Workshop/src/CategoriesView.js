import React, {useEffect, useState} from 'react';
import {Button, ButtonToolbar, Table} from "react-bootstrap";
import AddCategoryModal from "./AddCategoryModal";
import api from "./api";


function CategoriesView() {

    const [categories, setCategories] = useState([])
    const [showModal, setShowModal] = useState(false)

    useEffect(() => {
        getCategories().catch(console.error)
    }, [])

    async function getCategories() {
        const res = await api.get("categories")
        setCategories(res.data)
    }

    async function addNewCategory(e) {
        const {category_name, parent_id} = e
        await api.post("categories", {
            category_name, parent_id
        })
        await getCategories()
    }

    async function deleteCategory(e) {
        await api.delete("categories", {
            id: e
        })
    }


    const Category = ({id, parent_id, category_name}) => (
        <>
            <td>{id}</td>
            <td>{parent_id}</td>
            <td>{category_name}</td>
        </>
    )


    return (
        <>
            <ButtonToolbar className="justify-content-end m-3">
                <Button variant="primary" type="submit" onClick={() => setShowModal(true)}>
                    Add Category
                </Button>
            </ButtonToolbar>
            <Table striped bordered hover className="m-3">
                <thead>
                <tr>
                    <th>id</th>
                    <th>parent_id</th>
                    <th>category_name</th>
                </tr>
                </thead>
                <tbody>
                {
                    categories.map(category => (
                        <tr key={category.id}>
                            <Category  {...category}/>
                            <td>
                                <Button variant="primary" type="submit" onClick={()=>deleteCategory(category.id)}>Delete</Button>
                            </td>
                        </tr>
                    ))
                }
                </tbody>

            </Table>
            <AddCategoryModal addNewCategory={addNewCategory} showModal={showModal} setShowModal={setShowModal}/>
        </>

    );
}

export default CategoriesView;