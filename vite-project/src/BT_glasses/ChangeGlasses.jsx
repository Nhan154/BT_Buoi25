import React, { useState } from "react";

const ChangeGlasses = () => {
  const [glass, setGlass] = useState("./image/glassesImage/v1.png");
  const handleChangeGlasses = (glass) => {
    let image = `./image/glassesImage/v-${glass}.png`;
    setGlass(image);
  };

  const glassesList = [
    {
      id: 1,
      price: 30,
      name: "GUCCI G8850U",
      url: "./glassesImage/v1.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 2,
      price: 50,
      name: "GUCCI G8759H",
      url: "./glassesImage/v2.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 3,
      price: 30,
      name: "DIOR D6700HQ",
      url: "./glassesImage/v3.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 4,
      price: 70,
      name: "DIOR D6005U",
      url: "./glassesImage/v4.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 5,
      price: 40,
      name: "PRADA P8750",
      url: "./glassesImage/v5.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 6,
      price: 60,
      name: "PRADA P9700",
      url: "./glassesImage/v6.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 7,
      price: 80,
      name: "FENDI F8750",
      url: "./glassesImage/v7.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 8,
      price: 100,
      name: "FENDI F8500",
      url: "./glassesImage/v8.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 9,
      price: 60,
      name: "FENDI F4300",
      url: "./glassesImage/v9.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
  ];

  return (
    <div
      className="w-full h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('./image/glassesImage/background.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="bg-black py-4 text-center" style={{ opacity: 0.7 }}>
        <h4 className="display-8 fw-bold text-white">TRY GLASSES APP ONLINE</h4>
      </div>

      <div className="row">
        <div className="row justify-content-center align-items-start my-5">
          <div className="col-md-3 position-relative text-center mx-4">
            <img
              src="./image/glassesImage/model.jpg"
              alt="Model with glasses"
              className="img-fluid"
            />
            {/* {selectedGlasses && (
              <>
                <img
                  src={selectedGlasses.url}
                  alt="Glasses"
                  className="position-absolute"
                  style={{
                    top: "100px",
                    left: "35px",
                    width: "180px",
                    opacity: 0.9,
                  }}
                />
                <div className="position-absolute bottom-0 start-0 end-0 bg-warning bg-opacity-75 text-dark p-2">
                  <h6 className="text-primary fw-bold m-0">
                    {selectedGlasses.name}
                  </h6>
                  <small>{selectedGlasses.desc}</small>
                </div>
              </>
            )} */}
          </div>

          <div className="col-md-3 text-center mx-4">
            <img
              src="./image/glassesImage/model.jpg"
              alt="Model without glasses"
              className="img-fluid"
            />
          </div>
        </div>



        <div className="container bg-light rounded shadow p-4 mb-5">
          <button
            className="btn"
            style={{ backgroundImage: "./image/glassesImage/v1.jpg" }}
            onClick={() => {
              // setCar("./images/CarBasic/products/red-car.jpg")
              handleChangeGlasses("1");
            }}
          ></button>
          <button
            className="btn"
            style={{ backgroundImage: "./image/glassesImage/v2.jpg" }}
            onClick={() => {
              // setCar("./images/CarBasic/products/steel-car.jpg")
              handleChangeGlasses("2");
            }}
          ></button>
          <button
            className="btn"
            style={{ backgroundImage: "./image/glassesImage/v3.jpg" }}
            onClick={() => {
              // setCar("./images/CarBasic/products/black-car.jpg")
              handleChangeGlasses("3");
            }}
          ></button>
          <button
            className="btn"
            style={{ backgroundImage: "./image/glassesImage/v4.jpg" }}
            onClick={() => {
              // setCar("./images/CarBasic/products/silver-car.jpg")
              handleChangeGlasses("4");
            }}
          ></button>
        </div>
      </div>
    </div>
  );
};

export default ChangeGlasses;
