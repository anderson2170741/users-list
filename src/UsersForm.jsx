import axios from "axios";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";



const UsersForm = ({ getUsers, userSelected, deselectUser }) => {

    const initialValues = {
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        birthday: ""
    }
    const { handleSubmit, register, reset } = useForm();

    useEffect(() => {
        if (userSelected) {
            reset(userSelected)
        } else {
            reset(initialValues);
        }
    }, [userSelected])

    const submit = (data) => {
        console.log(data);
        if (userSelected) {
            axios.put(`https://users-crud1.herokuapp.com/users/${userSelected.id}/`, data)
                .then(() => {
                    getUsers()
                    deselectUser();
                })
                .catch(error => console.log(error.response?.data));
        } else {
            axios.post('https://users-crud1.herokuapp.com/users/', data)
                .then(() => getUsers())
                .catch(error => console.log(error.response?.data));
        }
    }

    return (
        <form
            className="users-form"
            onSubmit={handleSubmit(submit)}
        >

            <div className="input-container" >
                <i class="fa-solid fa-user"></i>
                <input {...register("first_name")} type="text" placeholder="first name" id="first_name" />
            </div>
            <div className="input-container">

                <input {...register("last_name")} type="text" placeholder="last name" id="last_name" />
            </div>
            <div className="input-container">
                <i class="fa-solid fa-envelope"></i>
                <input {...register("email")} type="text" placeholder="email" id="email" />
            </div>
            <div className="input-container">
                <i class="fa-solid fa-lock"></i>
                <input {...register("password")} type="password" placeholder="password" id="password" />
            </div>
            <div className="input-container">
                <i class="fa-solid fa-calendar-week"></i>
                <input {...register("birthday")} type="date" id="birthday" />
            </div>
            <button>Submit</button>
        </form>
    )
}

export default UsersForm;