import React from "react";
import { ListGroup } from "react-bootstrap";
import { FaPhoneVolume, FaFacebook, FaXTwitter, FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const FooterContact = () => (
  <>
    <ListGroup variant="flush" className="footer-contact">
      <ListGroup.Item>
        <FaPhoneVolume className="icon" />{" "}
        <a href="tel:+64073474659">+(64) (07) 347-4659</a>
      </ListGroup.Item>
      <ListGroup.Item>
        <MdEmail className="icon" />{" "}
        <a href="mailto:info@greenhaven.com">info@greenhaven.com</a>
      </ListGroup.Item>
      {/* <ListGroup.Item>
        <FaLocationDot className="icon" /> 21 Lake Road, Rotorua, NZ 3040
      </ListGroup.Item> */}
    </ListGroup>

    <div className="footer-socials">
      <FaFacebook />
      <FaXTwitter />
    </div>
  </>
);

export default FooterContact;
