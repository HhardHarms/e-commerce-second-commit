import React from "react";
import "./categories.css";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { AiFillPlusCircle } from "react-icons/ai";
import { FaGreaterThan } from "react-icons/fa";

const Categories = () => {
  const location = useLocation();
  const [S, setS] = useState(false);
  const [M, setM] = useState(false);
  const [L, setL] = useState(false);
  const [XL, setXL] = useState(false);
  const [XXL, setXXL] = useState(false);

  return (
    <div className="newSTYLE-LEFT">
      <div className="nwSTYL-lft">
        <div className="nwSTYL-lftUP">
          <h3>popular categories</h3>
        </div>
        <div className="nwSTYL-lftDWN">
          <ul>
            <li className={location.pathname === "/" ? "active" : ""}>
              <Link to="/shirts">
                {" "}
                <FaGreaterThan className="iccn" /> <span>Shirts</span>
              </Link>
            </li>
            <li className={location.pathname === "/" ? "active" : ""}>
              <Link to="/t-shirts">
                <FaGreaterThan className="iccn" /> <span>T-shirts</span>
              </Link>
            </li>
            <li className={location.pathname === "/" ? "active" : ""}>
              <Link to="/jackets">
                {" "}
                <FaGreaterThan className="iccn" /> <span>Jackets</span>
              </Link>
            </li>
            <li className={location.pathname === "/" ? "active" : ""}>
              <Link to="/bags">
                <FaGreaterThan className="iccn" /> <span>Bags</span>
              </Link>
            </li>
            <li className={location.pathname === "/" ? "active" : ""}>
              <Link to="/wrist-watches">
                <FaGreaterThan className="iccn" /> <span>Wrist-watches</span>
              </Link>
            </li>
            <li className={location.pathname === "/" ? "active" : ""}>
              <Link to="/footwears">
                <FaGreaterThan className="iccn" /> <span>Footwears</span>
              </Link>
            </li>
            <li className={location.pathname === "/" ? "active" : ""}>
              <Link to="/jewelries">
                <FaGreaterThan className="iccn" /> <span>Jewelries</span>
              </Link>
            </li>
            <li className={location.pathname === "/" ? "active" : ""}>
              <Link to="/more categories">
                {" "}
                <AiFillPlusCircle className="iccn" />{" "}
                <span>More categories</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="newSTYLE-LEFTdown">
        <div className="cata-LOGUE">
          <div className="cataLOGUE-UP">
            <h3>catalogue</h3>
          </div>
          <div className="cataLOGUE-BTTM">
            <div className="cataLOGUE-BTTM1">
              <p>price</p>
              <input type="range" className="priceRANGE" id="prcerange" />
              <div className="catlg-BTTM1dwn">
                <button>$70.00</button>
                <button>$110.00</button>
                <button>filter</button>
              </div>
            </div>
            <div className="cataLOGUE-BTTM2">
              <p>size</p>
              <div className="siZE">
                <button
                  className={`si-ze ${S ? "active1" : ""}`}
                  onClick={() => {
                    setS(!S);
                  }}
                >
                  s
                </button>
                <button
                  className={`si-ze ${M ? "active1" : ""}`}
                  onClick={() => {
                    setM(!M);
                  }}
                >
                  m
                </button>
                <button
                  className={`si-ze ${L ? "active1" : ""}`}
                  onClick={() => {
                    setL(!L);
                  }}
                >
                  l
                </button>
                <button
                  className={`si-ze ${XL ? "active1" : ""}`}
                  onClick={() => {
                    setXL(!XL);
                  }}
                >
                  xl
                </button>
                <button
                  className={`si-ze ${XXL ? "active1" : ""}`}
                  onClick={() => {
                    setXXL(!XXL);
                  }}
                >
                  XXl
                </button>
              </div>
            </div>
            <div className="cataLOGUE-BTTM3">
              <div className="BTTM3-up">
                <p>color</p>
              </div>
              <div className="BTTM3-dwn">
                <div className="BTTM3-dwn1">
                  <div className="bttmDwnCrcle1"></div>
                  <p>red</p>
                </div>
                <div className="BTTM3-dwn2">
                  <div className="bttmDwnCrcle2"></div>
                  <p>white</p>
                </div>
                <div className="BTTM3-dwn3">
                  <div className="bttmDwnCrcle3"></div>
                  <p>blue</p>
                </div>
                <div className="BTTM3-dwn4">
                  <div className="bttmDwnCrcle4"></div>
                  <p>yellow</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Categories;
