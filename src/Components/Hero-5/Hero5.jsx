import React from "react";
import "./hero5.css";
import { FaGlobeAmericas } from "react-icons/fa";
import { AiFillSafetyCertificate } from "react-icons/ai";
import { SiTrustedshops } from "react-icons/si";
import { MdHighQuality } from "react-icons/md";
import { RiCustomerService2Fill } from "react-icons/ri";

export default function Hero5() {
  return (
    <>
      <section className="Heerro-5">
        <div className="Hero5">
          <div className="Heerro5-CONT1">
            <FaGlobeAmericas className="herr5" />
            <h3>worldwide delivery</h3>
            <p>
              Our efficient staff help to save <br /> the time and effort by
              providing <br /> a shortest routing value for items you purchase,
              all you need to
              <br /> do is only shop, pay, and we deliver!!.
            </p>
          </div>

          <div className="Heerro5-CONT2">
            <AiFillSafetyCertificate className="herr5" />
            <h3>safe payment</h3>
            <p>
              We have obligation to abide by <br /> rules, face scrutiny and be{" "}
              <br />
              accountable for everything we <br /> do, and are held up to a high{" "}
              <br />
              level of standards and practices. <br /> In addition all payments
              are <br /> held in trust and protected <br /> for your security.
            </p>
          </div>

          <div className="Heerro5-CONT3">
            <SiTrustedshops className="herr5" />
            <h3>shop with confidence</h3>
            <p>
              We offer competitive prices on <br /> our 100 million plus product
              any range.
            </p>
          </div>

          <div className="Heerro5-CONT4">
            <MdHighQuality className="herr5" />
            <h3>quality & services</h3>
            <p>
              Here, our quality and service go <br /> hand-in-hand to help
              achieve <br /> the core values, we closely <br /> monitor client
              satisfaction and <br /> are consistently seeking new <br /> ways
              to exceed our client's <br /> expectations.
            </p>
          </div>

          <div className="Heerro5-CONT5">
            <RiCustomerService2Fill className="herr5" />
            <h3>24/7 support</h3>
            <p>
              We are available to you 24 hours <br /> a day, 7 days a week to
              provide <br /> easy assistance, an open mind <br /> and a caring
              ear in case of <br /> any emergency help <br /> needed.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
