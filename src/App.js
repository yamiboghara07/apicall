import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaCircle , FaGithub , FaTwitter , FaHeart , FaLessThan , FaGreaterThan} from "react-icons/fa6";
import logonav from "./image/A1.png"
import info1 from './image/info1.svg'
import info2 from './image/info2.svg'

function App() {

  const [data, setdata] = useState([]);

  useEffect(() => {
    axios.get('https://rickandmortyapi.com/api/character')
      .then(function (response) {
        console.log(response.data.results);
        setdata(response.data.results);

      })
      .catch(function (error) {
        console.log(error);
      })

  }, []);

  return (
    <div className="App">
      <div className='spacer'>
        <div className='top_header'>
          <div className='logoimg'>
            <img src={logonav}></img>
          </div>
          <div className='main_menu'>
            <ul className='menu'>
              <li><a href='#'>docs</a></li>
              <li><a href='#'>about</a></li>
              <div className='menubtn'>
                <a href='#'>support us </a>
              </div>
            </ul>
          </div>
        </div>
        <div className='text'>
          <h1>The Rick and Morty API</h1>
        </div>
      </div>
      <div className='bggray'>
        <div className='card-grid'>
          {
            data.map((item, ind) => {
              return (
                <>
                  <div className='cards'>
                    <div className='card_character'>
                      <div className='card_item'>
                        <img src={item.image}></img>
                      </div>
                      <div className='card_text'>
                        <div className='section'>
                          <h2>{item.name}</h2>
                        </div>
                        <div className='status'>
                          <p style={{ color: item.status === "Alive" ? 'green' : (item.status === "unknown" ? 'gray' : 'red') }}><b><FaCircle></FaCircle></b></p>
                          <span>{item.status} - {item.species}</span>
                        </div>
                        <div className='location'>
                          <p>Last known location:</p>
                          <span>{item.origin.name}</span>
                        </div>
                        <div className='seen'>
                          <p>Gender:</p>
                          <span>{item.gender}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )
            })
          }
        </div>
      </div>
      <div className='footer'>
          <ul className='navbar1'>
            <li>
              <a href='#'>
                characters:
                <span>826</span>
              </a>
            </li>
            <li>
              <a href='#'>
                location:
                <span>126</span>
              </a>
            </li>
            <li>
              <a href='#'>
                episodes:
                <span>51</span>
              </a>
            </li>
          </ul>
          <div className='server'>
            <span>server status</span>
            <i><FaCircle></FaCircle></i>
          </div>
          <div className='images'>
            <a><img src={info2}></img></a>
            <a><img src={info1}></img></a>
          </div>
          <div className='icons'>
            <i><FaGithub></FaGithub></i>
            <i><FaTwitter></FaTwitter></i>
            <i><FaHeart></FaHeart></i>
          </div>
          <div className='last_line'>
            <p>
              <i><FaLessThan></FaLessThan></i>
              <i><FaGreaterThan></FaGreaterThan></i>
               by</p>
            <a href='#'>Axel Fuhrmann</a>
            <span>2024</span>
          </div>
      </div>

    </div>
  );
}

export default App;
