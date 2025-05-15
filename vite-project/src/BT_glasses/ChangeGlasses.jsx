import React, { useState } from "react";

// Thành phần cần thay đổi: Glass
const ChangeGlasses = () => {
  const glassesList = [
    {
      id: 1,
      price: 30,
      name: "GUCCI G8850U",
      url: "./image/glassesImage/v/v1.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 2,
      price: 50,
      name: "GUCCI G8759H",
      url: "./image/glassesImage/v/v2.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 3,
      price: 30,
      name: "DIOR D6700HQ",
      url: "./image/glassesImage/v/v3.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 4,
      price: 70,
      name: "DIOR D6005U",
      url: "./image/glassesImage/v/v4.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 5,
      price: 40,
      name: "PRADA P8750",
      url: "./image/glassesImage/v/v5.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 6,
      price: 60,
      name: "PRADA P9700",
      url: "./image/glassesImage/v/v6.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 7,
      price: 80,
      name: "FENDI F8750",
      url: "./image/glassesImage/v/v7.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 8,
      price: 100,
      name: "FENDI F8500",
      url: "./image/glassesImage/v/v8.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 9,
      price: 60,
      name: "FENDI F4300",
      url: "./image/glassesImage/v/v9.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
  ];

  const [selectedGlasses, setSelectedGlasses] = useState(glassesList[0]);
  const handleChangeGlasses = (glass) => {
    setSelectedGlasses(glass);
  };

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
          <div className="col-md-3 position-relative mx-4">
            <img
              src="./image/glassesImage/model.jpg"
              alt="Model with glasses"
              className="img-fluid"
            />
            {selectedGlasses && selectedGlasses.url && (
              <>
                <img
                  src={selectedGlasses.url}
                  alt="Glasses"
                  className="position-absolute"
                  style={{
                    top: "105px",
                    left: "100px",
                    width: "180px",
                    opacity: 0.9,
                  }}
                />
                <div className="position-absolute bottom-0 start-0 end-0 bg-warning bg-opacity-50 text-dark" style={{padding: '30px', transform: 'translateX(3%)', width: '94%' }}>
                  <h6 className="text-primary fw-bold m-0">
                    {selectedGlasses.name}
                  </h6>
                  <small>{selectedGlasses.desc}</small>
                </div>
              </>
            )}
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
          <div className="row row-cols-2 row-cols-sm-3 row-cols-md-6 g-3">
           
            {glassesList.map((glass) => (
              <div className="col text-center" key={glass.id}>
                <button
                  onClick={() => handleChangeGlasses(glass)}
                  className="btn p-1 border border-secondary bg-white w-100"
                  style={{ height: "100px" }}
                >
                  {glass.url ? (
                    <img
                      src={glass.url}
                      alt={glass.name}
                      className="img-fluid"
                    />
                  ) : (
                    <div className="w-100 h-100 d-flex justify-content-center align-items-center text-muted">
                      No Image
                    </div>
                  )}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChangeGlasses;
