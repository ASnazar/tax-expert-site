import React from 'react';
import style from './ModalWindowCalRegist.modyle.css';





const ModalWindowCalRegister = ({ active, setActive }) => {


    return (
        <div
            className={active ? "modal active" : "modal"}
            onClick={() => setActive(false)}
        >
            <div
                className={active ? "modal_content active" : "modal_content"}
                onClick={(e) => e.stopPropagation()}
            >
                <div className="contein">
                    <div className="">
                        <h1>Call</h1>
                        <form  className="form" onSubmit={(event) =>{ event.preventDefault(); setActive(false)}}>
                            <label>Name:<input
                                type="text"
                                required
                                placeholder="Name"
                                className="input"
                            /> </label>
                           <label>Phone: <input
                                type="text"
                                required
                                placeholder="Phone number"
                                className="input"
                           /></label>
                            <label> Email: <input type="email" name="user_email"  className="input" required/></label>
                            <input type="submit" value="Send"  className="input"    />


                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ModalWindowCalRegister;