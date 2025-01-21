"use client";
import React, { useState, type FC } from "react";
import "./Footer.scss";
import useFetchData from "@/hooks/useFetchData";
import Image from "next/image";
import FooterData from "@/constants/FooterData";
import { CountryResponse } from "@/types/useFetchData";
import Link from "next/link";
import IconCall from "@/public/images/icon_call1.svg";
import IconMail from "@/public/images/icon_mail2.svg";
import { Modal, Button, Icon } from "pixel-react";

const Footer: FC = () => {
  const [modal, setModal] = useState(false);
  const [selectedTab, setSelectedTab] = useState<string>("terms");

  const handleTabClick = (tab: string) => {
    setSelectedTab(tab);
  };
  const goToTopBtn = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
  const { data, loading } = useFetchData<CountryResponse>(
    "https://api.country.is/"
  );

  if (loading) {
    return <>Loading...</>;
  }
  return (
    <>
      <div>
        {modal && (
          <Modal
            isOpen={modal}
            onClose={() => {
              setModal(false);
            }}
            isHeaderDisplayed={false}
            isFooterDisplayed={true}
            ariaHideApp={false}
            zIndex={1002}
            boxShadow="none"
            footerContent={
              <div style={{ display: "flex", gap: "10px" }}>
                <Button variant="primary" label="Accept" />
                <Button
                  variant="secondary"
                  onClick={() => setModal(false)}
                  label="Close"
                />
              </div>
            }
          >
            <div className="modal">
              <div className="tabs">
                <div
                  className={`tab ${selectedTab === "terms" ? "selected" : ""}`}
                  onClick={() => handleTabClick("terms")}
                >
                  Terms of Use
                </div>
                <div
                  className={`tab ${
                    selectedTab === "privacy" ? "selected" : ""
                  }`}
                  onClick={() => handleTabClick("privacy")}
                >
                  Privacy Policy
                </div>
                <div
                  className={`tab ${selectedTab === "elua" ? "selected" : ""}`}
                  onClick={() => handleTabClick("elua")}
                >
                  ELUA
                </div>
              </div>
              <div className="content">
                {selectedTab === "terms" && (
                  <div>
                    <h3>ACCEPTANCE OF TERMS</h3>
                    <p>
                      By accessing or using our services, You acknowledge that
                      You have read, understood, and agree to be bound by these
                      Terms. These Terms as well as the Privacy Policy and all
                      other applicable laws and regulations govern Your access
                      and use of the software and services provided by the
                      Company
                    </p>
                    <h3>ACCEPTANCE OF TERMS</h3>
                    <p>
                      By accessing or using our services, You acknowledge that
                      You have read, understood, and agree to be bound by these
                      Terms. These Terms as well as the Privacy Policy and all
                      other applicable laws and regulations govern Your access
                      and use of the software and services provided by the
                      Company
                    </p>
                  </div>
                )}
                {selectedTab === "privacy" && (
                  <div>
                    FIREFLINK PRIVACY POLICY - INTRODUCTION FireFlink (“we” or
                    “us” or “our”) respects the privacy of our users (“user” or
                    “you”). This Privacy Policy explains how we collect, use,
                    disclose, and safeguard your information when you visit our
                    website www.fireflink.com including any other media form,
                    media channel, mobile website, or mobile application related
                    or connected to that (collectively, the “Site”). Please read
                    this privacy policy carefully. If you do not agree with the
                    terms of this privacy policy, please do not access the Site.
                    We reserve the right to make changes to this Privacy Policy
                    at any time and for any reason. We will alert you about any
                    changes by updating the “Last Updated” date of this Privacy
                    Policy. Any changes or modifications will be effective
                    immediately upon posting the updated Privacy Policy on the
                    Site, and you waive the right to receive specific notice of
                    each such change or modification. You are encouraged to
                    periodically review this Privacy Policy to stay informed of
                    updates. You will be deemed to have been made aware of, will
                    be subject to, and will be deemed to have accepted the
                    changes in any revised Privacy Policy by your continued use
                    of the Site after the date such revised Privacy Policy is
                    posted.
                  </div>
                )}
                {selectedTab === "elua" && (
                  <div>
                    End-User License Agreement This End-User License Agreement
                    (“EULA/Agreement”) is a legally binding agreement between
                    FireFlink Private Limited (“FireFlink”), the owner and
                    licensor of a software testing automation platform which may
                    include associated media, printed materials, and online or
                    electronic documentation (“the Platform”), and you
                    (“You/Your”) the authorized end user and/or representative
                    of the licensee of the Platform (“Licensee”). This EULA is a
                    legally binding contract that includes terms that limit Your
                    legal rights and FireFlink’s liability to You and shall
                    govern all access to and use of the Platform. You hereby
                    agree, without limitation or alteration, to all the terms
                    and conditions contained herein. The Platform is licensed,
                    not sold, to You by FireFlink for use strictly under the
                    terms of the License entered into with the Licensee and the
                    terms of this EULA. By installing, copying, or otherwise
                    using the licensed product (“Platform”), You agree to be
                    bound by the terms and conditions outlined in this EULA.
                    However, if You do not agree to the terms and conditions
                    outlined in this EULA, You may not download, install, or use
                    the Platform.
                  </div>
                )}
              </div>
            </div>
          </Modal>
        )}
      </div>
      <footer className="ff-footer">
        <section className="ff-footer-container">
          {FooterData.CompanyWidget.map(() => {
            return (
              <article key={1}>
                {data?.country === "IN" ? (
                  <section>
                    <div className=" ">
                      <Link className="f-logo" href={"/"}>
                        <Image
                          src={"/images/fireflink-logo-with-text.svg"}
                          width={145}
                          height={29}
                          alt="logo"
                        />
                      </Link>
                      <h3 className="">India</h3>
                      <p className="">
                        4th floor, IndiQube South Mile building, Vijayarangam
                        Layout, Jayanagar, Bengaluru, Karnataka, 560070, India.
                      </p>
                      <div className="">
                        <div className="">
                          <ul className="">
                            <li className="">
                              <Link className="" href="/contactus">
                                Contact Us
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div className="ff-footer-container-link">
                          <Image
                            className=""
                            src={IconCall}
                            alt="phone call logo"
                          />
                          <a className="" href="tel:+919900010384">
                            +91 99000 10384
                          </a>
                        </div>
                      </div>
                      <div className="ff-footer-container-link">
                        <Image
                          className=""
                          src={IconMail}
                          alt="email support logo"
                        />
                        <a className="" href="mailto:info@fireflink.com">
                          info@fireflink.com
                        </a>
                      </div>
                      <div className="ff-footer-container-link">
                        <Image
                          className=""
                          src={IconMail}
                          alt="email support logo"
                        />
                        <a className="" href="mailto:info@fireflink.com">
                          info@fireflink.com
                        </a>
                      </div>

                      <div className="social-icons">
                        {FooterData.socialIcon.map((item) => {
                          return (
                            <a
                              href={item.url}
                              key={item.id}
                              // onMouseEnter={() => setHoveredItemId(item.id)}
                              // onMouseLeave={() => setHoveredItemId(null)}
                            >
                              <Image
                                src={item.iconWhite}
                                color="red"
                                alt={item.iconLabel}
                              />
                            </a>
                          );
                        })}
                      </div>
                    </div>
                  </section>
                ) : data?.country === "GB" ? (
                  <>Canada</>
                ) : (
                  <>Else</>
                )}
              </article>
            );
          })}

          {FooterData.Finder.map((widget) => {
            return (
              <article key={widget.id}>
                <div className="">
                  <h3 className="">{widget.title}</h3>
                  <ul className="">
                    {widget.menuItems.map((item) => {
                      return (
                        <li key={item.id} className="footer_anchor">
                          <Link className="" href={item.url}>
                            {item.text}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </article>
            );
          })}
          {FooterData.Platform.map((widget) => {
            return (
              <article key={widget.id}>
                <div className="">
                  <h3 className="">{widget.title}</h3>
                  <ul className="">
                    {widget.menuItems.map((item) => {
                      return (
                        <li key={item.id} className="">
                          <Link className="" href={item.url}>
                            {item.text}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </article>
            );
          })}
          {FooterData.Solutions.map((widget) => {
            return (
              <article className="" key={widget.id}>
                <div className="">
                  <h3 className="">{widget.title}</h3>
                  <ul className="">
                    {widget.menuItems.map((item) => {
                      return (
                        <li key={item.id} className="">
                          <Link className="" href={item.url}>
                            {item.text}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </article>
            );
          })}
          {FooterData.Resources.map((widget) => {
            return (
              <article className="" key={widget.id}>
                <div className="">
                  <h3 className="">{widget.title}</h3>
                  <ul className="">
                    {widget.menuItems.map((item) => {
                      return (
                        <li key={item.id} className="">
                          <Link className="" href={item.url}>
                            {item.text}
                          </Link>
                        </li>
                      );
                    })}
                    <li>
                      <a
                        className=""
                        target="_blank"
                        href="http://support.fireflink.com"
                      >
                        {" "}
                        Support{" "}
                      </a>{" "}
                    </li>
                  </ul>
                </div>
                <Icon
                  name="arrows_top_icon"
                  className="ff-footer-goto-top"
                  color="#fff"
                  onClick={goToTopBtn}
                />
              </article>
            );
          })}
        </section>
        <section className="ff-footer-copyright">
          <div className="ff-footer-copyright-text">
            <div className="">
              Copyright © FireFlink Pvt Ltd. All Rights Reserved
            </div>
            <div className="" onClick={() => setModal(true)}>
              <span onClick={() => {}}>Terms of use</span> l{" "}
              <span onClick={() => {}}>Privacy policy</span> l{" "}
              <span onClick={() => {}}>EULA</span>
            </div>
          </div>
        </section>
      </footer>
    </>
  );
};

export default Footer;
