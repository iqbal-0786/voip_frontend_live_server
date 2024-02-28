// src/components/Dialpad.js
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBackspace, faPhoneVolume } from "@fortawesome/free-solid-svg-icons";
import "./Dialpad.css"; // Import custom CSS for styling
import horse from './horse.ogv';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import ReactAudioPlayer from 'react-audio-player';
const Dialpad = () => {
  const [phoneNumber, setPhoneNumber] = useState("");


  const numberToAlphabetMap = {
    1: "",
    2: "ABC",
    3: "DEF",
    4: "GHI",
    5: "JKL",
    6: "MNO",
    7: "PQRS",
    8: "TUV",
    9: "WXYZ",
    0: " ",
  };

  const handleKeyPress = (key) => {
    setPhoneNumber((prevNumber) => prevNumber + key);

  };

  const handleBackspace = () => {
    setPhoneNumber((prevNumber) => prevNumber.slice(0, -1));

  };

  const handleKeyboardInput = (event) => {
    const { key } = event;

    if (/^[0-9*#]$/.test(key)) {
      handleKeyPress(key);
    } else if (key === "Backspace") {
      handleBackspace();
    } else if (/[A-Za-z]/.test(key)) {
      const mappedNumber = Object.keys(numberToAlphabetMap).find((num) =>
        numberToAlphabetMap[num].includes(key.toUpperCase())
      );

      if (mappedNumber) {
        handleKeyPress(mappedNumber);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyboardInput);

    return () => {
      window.removeEventListener("keydown", handleKeyboardInput);
    };
  }, []);



  const [formData, setFormData] = useState({
    Voicemail: 'History', // default value
  });

  const onEditChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  return (
    <>
      <main id="main" className="main">
        <div className="pagetitle">
          <nav>
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="index.html">Dashboard</a>
              </li>
              <li className="breadcrumb-item active">Phone</li>
            </ol>
          </nav>
        </div>
        <section>
          <div className="card">
            <div className="card-body phone-body mt-3">
              <div className="container">
                <div className="row  d-flex justify-content-around">
                  <div className="col-6 border">
                    <div className=" justify-content-center mt-4 col-sm-12">
                      <div className="btn-group">
                        <input
                          type="radio"
                          className="btn-check"
                          name="Voicemail"
                          id="radio1"
                          autoComplete="off"
                          value="History"
                          checked={formData.Voicemail === 'History'}
                          onChange={() => onEditChange('Voicemail', 'History')}
                        />
                        <label className="btn btn-outline-primary" htmlFor="radio1">
                          History
                        </label>
                        <input
                          type="radio"
                          className="btn-check"
                          name="Voicemail"
                          id="radio2"
                          autoComplete="off"
                          value="Recording"
                          checked={formData.Voicemail === 'Recording'}
                          onChange={() => onEditChange('Voicemail', 'Recording')}
                        />
                        <label className="btn btn-outline-primary" htmlFor="radio2">
                          Recording
                        </label>
                        <input
                          type="radio"
                          className="btn-check"
                          name="Voicemail"
                          id="radio3"
                          autoComplete="off"
                          value="Block"
                          checked={formData.Voicemail === 'Block'}
                          onChange={() => onEditChange('Voicemail', 'Block')}
                        />
                        <label className="btn btn-outline-primary" htmlFor="radio3">
                          Voice Mail
                        </label>
                      </div>

                      {formData.Voicemail === 'History' && (
                        <div className="container">
                          <TableComponent1 />
                        </div>
                      )}
                      {formData.Voicemail === 'Recording' && (
                        <div className="container">
                          <TableComponent2 />
                        </div>
                      )}
                      {formData.Voicemail === 'Block' && (
                        <div className="container">
                          <TableComponent3 />
                        </div>
                      )}

                    </div>
                  </div>
                  <div className="col-4">
                    <div className="container mt-5 text-center">
                      <div className="mb-1 position-relative">
                        <input
                          className="form-control"
                          type="text"
                          value={phoneNumber}
                          readOnly
                        />
                        {phoneNumber.length > 0 && (
                          <button
                            className="btn btn-danger position-absolute backspace "
                            onClick={handleBackspace}
                          >
                            <FontAwesomeIcon icon={faBackspace} />
                          </button>
                        )}
                      </div>
                      <div className="row row-cols-3 p-3">
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, "*", 0, "#"].map((key) => (
                          <div key={key} className="col">
                            <button
                              className="btn btn-light rounded-circle btn-md number-button"
                              onClick={() => handleKeyPress(key.toString())}
                            >
                              {key}
                              <div className="alphabet">
                                {numberToAlphabetMap[key]}
                              </div>
                            </button>
                          </div>
                        ))}
                      </div>
                      <div className="row ">
                        <div className="col">
                          <button
                            className="btn btn-success phone rounded-circle"
                            onClick={() => console.log("Calling...")}
                            disabled={phoneNumber.trim() === ''}
                          >
                            <FontAwesomeIcon icon={faPhoneVolume} />
                          </button>
                        </div>
                      </div>
                      <div className="row ">
                        <div className="col">
                          <button
                            className="btn btn-primty "
                          >Calling Number : 098890327198
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer footer id="footer" class="footer">
        <div class="copyright">
          &copy; Copyright 2023{" "}
          <strong>
            <span>Live PBX</span>
          </strong>
          . All Rights Reserved
        </div>
      </footer>
    </>
  );
};

export default Dialpad;
const TableComponent1 = () => {
  return <div className="container mt-3">

    <table className="table ">
      <tr>
        <td className="text-start">
          <strong className=" text-danger fw-bold">
            Lena Oxton
          </strong>
          <p>
            (217) 364-7643
          </p>
        </td>
        <td className="text-end">
          <p>
            2:39PM
          </p>
        </td>
      </tr>
      <tr>
        <td className="text-start">
          <strong className=" text-danger fw-bold">
            Lena Oxton
          </strong>
          <p>
            (217) 364-7643
          </p>
        </td>
        <td className="text-end">
          <p>
            2:39PM
          </p>
        </td>
      </tr>
      <tr>
        <td className="text-start">
          <strong className="fw-bold">
            Lena Oxton
          </strong>
          <p>
            (217) 364-7643
          </p>
        </td>
        <td className="text-end">
          <p>
            2:39PM
          </p>
        </td>
      </tr>
      <tr>
        <td className="text-start">
          <strong className=" text-danger fw-bold">
            Lena Oxton
          </strong>
          <p>
            (217) 364-7643
          </p>
        </td>
        <td className="text-end">
          <p>
            2:39PM
          </p>
        </td>
      </tr>
      <tr>
        <td className="text-start ">
          <strong className="fw-bold" >
            Lena Oxton
          </strong>
          <p>
            (217) 364-7643
          </p>
        </td>
        <td className="text-end">
          <p>
            2:39PM
          </p>
        </td>
      </tr>
      <tr>
        <td className="text-start">
          <strong className=" text-danger fw-bold">
            Lena Oxton
          </strong>
          <p>
            (217) 364-7643
          </p>
        </td>
        <td className="text-end">
          <p>
            2:39PM
          </p>
        </td>
      </tr>
      <tr>
        <td className="text-start">
          <strong className=" text-danger fw-bold">
            Lena Oxton
          </strong>
          <p>
            (217) 364-7643
          </p>
        </td>
        <td className="text-end">
          <p>
            2:39PM
          </p>
        </td>
      </tr>
      <tr>
        <td className="text-start">
          <strong className="fw-bold">
            Lena Oxton
          </strong>
          <p>
            (217) 364-7643
          </p>
        </td>
        <td className="text-end">
          <p>
            2:39PM
          </p>
        </td>
      </tr>
      <tr>
        <td className="text-start">
          <strong className="fw-bold">
            Lena Oxton
          </strong>
          <p>
            (217) 364-7643
          </p>
        </td>
        <td className="text-end">
          <p>
            2:39PM
          </p>
        </td>
      </tr>
    </table>
  </div>;
};

const TableComponent2 = () => {
  return <div className="container mt-3">

    <table className="table">
      <tr>
        <td className="text-start mb-3">
          <strong className="pl-4">
            (217) 364-7643

          </strong>
          <ReactAudioPlayer className="w-100"
            src={horse}
            controls
          />
        </td>
      </tr>
      <tr>
        <td className="text-start  mb-3">
          <strong className="pl-4">
            (217) 364-7643

          </strong>
          <ReactAudioPlayer className="w-100"
            src={horse}
            controls
          />
        </td>
      </tr>
      <tr>
        <td className="text-start  mb-3">
          <strong className="pl-4">
            (217) 364-7643

          </strong>
          <ReactAudioPlayer className="w-100"
            src={horse}
            controls
          />
        </td>
      </tr>
      <tr>
        <td className="text-start  mb-3">
          <strong className="pl-4">
            (217) 364-7643

          </strong>
          <ReactAudioPlayer className="w-100"
            src={horse}
            controls
          />
        </td>
      </tr>
      <tr>
        <td className="text-start  mb-3">
          <strong className="pl-4">
            (217) 364-7643

          </strong>
          <ReactAudioPlayer className="w-100"
            src={horse}
            controls
          />
        </td>
      </tr>

    </table>
  </div>;
};

const TableComponent3 = () => {
  return <div className="container mt-3">
<table className="table">
      <tr>
        <td className="text-start mb-3">
          <strong className="pl-4">
            (217) 364-7643

          </strong>
          <ReactAudioPlayer className="w-100"
            src={horse}
            controls
          />
        </td>
      </tr>
      <tr>
        <td className="text-start  mb-3">
          <strong className="pl-4">
            (217) 364-7643

          </strong>
          <ReactAudioPlayer className="w-100"
            src={horse}
            controls
          />
        </td>
      </tr>
      <tr>
        <td className="text-start  mb-3">
          <strong className="pl-4">
            (217) 364-7643

          </strong>
          <ReactAudioPlayer className="w-100"
            src={horse}
            controls
          />
        </td>
      </tr>
      <tr>
        <td className="text-start  mb-3">
          <strong className="pl-4">
            (217) 364-7643

          </strong>
          <ReactAudioPlayer className="w-100"
            src={horse}
            controls
          />
        </td>
      </tr>
      <tr>
        <td className="text-start  mb-3">
          <strong className="pl-4">
            (217) 364-7643

          </strong>
          <ReactAudioPlayer className="w-100"
            src={horse}
            controls
          />
        </td>
      </tr>

    </table>
  </div>;
};