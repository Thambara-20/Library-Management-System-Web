import React from "react";
import "./Value.css";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,

} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import valueImage from "./values.jpg";
import data from "../../utils/accordion";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { useScroll } from "framer-motion";


const Value = () => {
  return (
    
    <section className="v-wrapper">
      <div className="paddings innerWidth flexCenter v-container">
        {/* left side div */}
        <div className="v-left">
          <div className="image-container" id="v-image">
            <img src={valueImage} alt="v-image" id="v-img" />
          </div>
        </div>
        {/* right side of value */}
        <div className="flexColStart v-right">
          <span className="orangeText">Our Service</span>
          <span className="primaryText">Services We Give to You</span>
          <span className="secondaryText">
            We always ready to help by providing the best services for you.{" "}
            <br /> We believe books can make your life more powerful.
          </span>
          <Accordion
            className="accordion"
            allowMultipleExpanded={false}
            preExpanded={[0]}
          >
            {
           
            data.map((item, i) => {
              return (
                <AccordionItem className={'accordion-item'} key={i} uuid={i}>
                  <AccordionItemHeading>
                    <AccordionItemButton id="accor" className="flexCenter accordion-button">
                      <div className="flexCenter icon" id="icon">{item.icon}</div>
                      <span className="primaryText">{item.heading}</span>
                      <div className="flexCenter icon">
                        <MdOutlineArrowDropDown size={20} />
                      </div>
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p className="secondaryText">{item.detail}</p>
                  </AccordionItemPanel>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default Value;


