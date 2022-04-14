import React from "react";

const ResMenucard = ({ menuData }) => {
    console.log(menuData)



    const mystyle = { color: 'red' };

    return (

        <>
            <section className="main-container">

                {menuData.map((curElem) => {
                    const { id, name, category, image, description } = curElem;  ///array distructing
                    return (
                        <>
                            <div className="card-container" key={id}>
                                <div className="card">
                                    <div className="card-body">
                                        <span className="card-number card-circle subtle">{id}


                                        </span>
                                        <span className="card-authore subtle" style={mystyle} > {name}</span>
                                        <h2>{name}</h2>
                                        <span className="card-discription subtle">
                                            i love maggie to much doloenh d sj j  ddj   sa nsk e eknjdjg  skkkss jnj e ekis sbsbds
                                            svdiudkdjbdg d
                                        </span>
                                        <div className="card-read">Read
                                        </div>
                                        <img src={image} alt="images" className="nrounded float-start " />
                                        <span className="card-tag subtle"> Order now</span>
                                    </div>
                                </div>
                            </div>
                        </>


                    );

                })}
            </section>
        </>
    )
}
export default ResMenucard;