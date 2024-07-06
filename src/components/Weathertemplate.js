import React, { useEffect, useState } from 'react';
import axios from "axios";





import {
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBRow,
  MDBTypography,
  MDBInputGroup,
  MDBRadio,
} from "mdb-react-ui-kit";


function Weathertemplate() {
  const apiKey= process.env.REACT_APP_API_KEY;
  const [query, setQuery] = useState('');
  const [weatherData, setWeatherData] = useState("null");
 
  

  
  const fetchData = async ()=>{

  const options = {
    method: 'GET',
    url: 'https://weatherapi-com.p.rapidapi.com/forecast.json',
    params: {
      q: query,
      days: "5"
    },
    headers: {
       'x-rapidapi-key': apiKey,
    'x-rapidapi-host': 'weatherapi-com.p.rapidapi.com'
    }
  };
  
  try {
    const response = await axios.request(options);
    console.log(response.data)
    setWeatherData(response.data)
  } catch (error) {
    console.error(error);
  }

  }
  const handleChange = (e) => {
    setQuery(e.target.value);
  }
  useEffect(() => {
    if (query) {
     // fetchData();
    }
  }, [query]);
  const handleClick = (e) => {
    e.preventDefault();
    fetchData();
  }
  




  return (
    <div>




      <section className="vh-120" style={{ backgroundColor: "#C1CFEA" }}>
        <MDBRow

          className="justify-content-center "

          style={{ paddingTop: "20px" }} >
          <MDBInputGroup className="mb-3" style={{ width: "42%", paddingLeft: "60px" }}>
            <input
              className="form-control rounded"
              type="text"
              placeholder="City"
              onChange={handleChange}

            />
            {/* <a href="#!" type="button"> */}
            <button className="mx-2" onClick={handleClick}>
              <span
                className="input-group-text border-0 fw-bold"
                id="search-addon"
              >
                Check!
              </span>
            </button>
            {/* </a> */}
          </MDBInputGroup>
        </MDBRow>
        <MDBContainer className="h-100">
          {weatherData ? (
            <MDBRow
              className="justify-content-center align-items-center h-100"
              style={{ color: "#282828" }}
            >
              <MDBCol md="9" lg="7" xl="5">
                <MDBCard
                  className="mb-4 gradient-custom"
                  style={{ borderRadius: "25px" }}
                >

                  <MDBCardBody className="p-4">
                    <div className="d-flex justify-content-between pb-2">

                      <div>
                        <h2 className="display-2">
                          <strong>{weatherData?.current?.temp_c}°C</strong>
                        </h2>
                        <p className="text-muted mb-0">{weatherData?.location?.name}</p>
                      </div>
                      <div>
                        <img
                          src= {`${weatherData?.current?.condition?.icon}`}
                          width="150px"
                        />
                      </div>
                    </div>

                  </MDBCardBody>

                </MDBCard>

                <MDBCard className="mb-4" style={{ borderRadius: "25px" }}>
                  <MDBCardBody className="p-4">
                    <div className="d-flex justify-content-around text-center pb-3 pt-2">
                      <div className="flex-column">
                        <p className="small">
                          <strong>{weatherData?.forecast?.forecastday[0]?.hour[12]?.temp_c}°C</strong>
                        </p>
                        <MDBIcon
                          fas
                          icon="sun"
                          size="2x"
                          className="mb-3"
                          style={{ color: "#ddd" }}
                        />
                        <p className="mb-0">
                          <strong>12:00</strong>
                        </p>
                        <p
                          className="mb-0 text-muted"
                          style={{ fontSize: ".65rem" }}
                        >
                          PM
                        </p>
                      </div>
                      <div className="flex-column">
                        <p className="small">
                          <strong>{weatherData?.forecast?.forecastday[0]?.hour[13]?.temp_c}°C</strong>
                        </p>
                        <MDBIcon
                          fas
                          icon="sun"
                          size="2x"
                          className="mb-3"
                          style={{ color: "#ddd" }}
                        />
                        <p className="mb-0">
                          <strong>1:00</strong>
                        </p>
                        <p
                          className="mb-0 text-muted"
                          style={{ fontSize: ".65rem" }}
                        >
                          PM
                        </p>
                      </div>
                      <div className="flex-column">
                        <p className="small">
                          <strong>{weatherData?.forecast?.forecastday[0]?.hour[14]?.temp_c}°C</strong>
                        </p>
                        <MDBIcon
                          fas
                          icon="cloud"
                          size="2x"
                          className="mb-3"
                          style={{ color: "#ddd" }}
                        />
                        <p className="mb-0">
                          <strong>2:00</strong>
                        </p>
                        <p
                          className="mb-0 text-muted"
                          style={{ fontSize: ".65rem" }}
                        >
                          PM
                        </p>
                      </div>
                      <div className="flex-column">
                        <p className="small">
                          <strong>{weatherData?.forecast?.forecastday[0]?.hour[15]?.temp_c}°C</strong>
                        </p>
                        <MDBIcon
                          fas
                          icon="cloud"
                          size="2x"
                          className="mb-3"
                          style={{ color: "#ddd" }}
                        />
                        <p className="mb-0">
                          <strong>3:00</strong>
                        </p>
                        <p
                          className="mb-0 text-muted"
                          style={{ fontSize: ".65rem" }
                          }
                        >
                          PM
                        </p>
                      </div>
                      <div className="flex-column">
                        <p className="small">
                          <strong>{weatherData?.forecast?.forecastday[0]?.hour[16]?.temp_c}°C</strong>
                        </p>
                        <MDBIcon
                          fas
                          icon="cloud-showers-heavy"
                          size="2x"
                          className="mb-3"
                          style={{ color: "#ddd" }}
                        />
                        <p className="mb-0">
                          <strong>4:00</strong>
                        </p>
                        <p
                          className="mb-0 text-muted"
                          style={{ fontSize: ".65rem" }}
                        >
                          PM
                        </p>
                      </div>
                    </div>
                  </MDBCardBody>
                </MDBCard>

                <MDBCard className="mb-4" style={{ borderRadius: "25px" }}>
                  <MDBCardBody className="p-4">
                    <div className="d-flex justify-content-around text-center pb-3 pt-2">
                      <div className="flex-column">
                        <p className="small">
                          <strong>{weatherData?.forecast?.forecastday[1]?.day?.maxtemp_c}°C</strong>
                        </p>
                        <MDBIcon
                          fas
                          icon="sun"
                          size="2x"
                          className="mb-3"
                          style={{ color: "#ddd" }}
                        />
                        <p className="mb-0">
                          <strong>Mon</strong>
                        </p>
                      </div>
                      <div className="flex-column">
                        <p className="small">
                          <strong>20°C</strong>
                        </p>
                        <MDBIcon
                          fas
                          icon="sun"
                          size="2x"
                          className="mb-3"
                          style={{ color: "#ddd" }}
                        />
                        <p className="mb-0">
                          <strong>Tue</strong>
                        </p>
                      </div>
                      <div className="flex-column">
                        <p className="small">
                          <strong>16°C</strong>
                        </p>
                        <MDBIcon
                          fas
                          icon="cloud"
                          size="2x"
                          className="mb-3"
                          style={{ color: "#ddd" }}
                        />
                        <p className="mb-0">
                          <strong>Wed</strong>
                        </p>
                      </div>
                      <div className="flex-column">
                        <p className="small">
                          <strong>17°C</strong>
                        </p>
                        <MDBIcon
                          fas
                          icon="cloud"
                          size="2x"
                          className="mb-3"
                          style={{ color: "#ddd" }}
                        />
                        <p className="mb-0">
                          <strong>Thu</strong>
                        </p>
                      </div>
                      <div className="flex-column">
                        <p className="small">
                          <strong>18°C</strong>
                        </p>
                        <MDBIcon
                          fas
                          icon="cloud-showers-heavy"
                          size="2x"
                          className="mb-3"
                          style={{ color: "#ddd" }}
                        />
                        <p className="mb-0">
                          <strong>Fri</strong>
                        </p>
                      </div>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
             ):(
              <p>loading...</p>
          )}
      </MDBContainer>
      </section>
     
    </div>
  )
}

export default Weathertemplate;
