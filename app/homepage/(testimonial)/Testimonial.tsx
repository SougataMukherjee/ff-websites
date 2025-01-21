"use client";
import React, { type FC, useState, useRef } from "react";
import Image from "next/image";
import "./Testimonial.scss";
import Card from "@/components/card/Card";
import { TESTIMONIALS } from "@/constants/HomePageTestimonials";
import { Avatar, Icon, truncateText } from "pixel-react";
import { TestimonialData } from "@/types/HomePageTestimonials";
import dynamic from "next/dynamic";
const Slider = dynamic(() => import("react-slick"), { ssr: false });
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows: true,

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        dots: true,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
  // beforeChange: (current: number, next: number) => {
  //   console.log("Current slide index:", current, "Next slide index:", next);
  // },
};

const Testimonial: FC = () => {
  const [testimonialDetails, setTestimonialDetails] = useState(false);
  const sliderRef = useRef<any>(null);
  const [testimonialData, setTestimonialData] =
    useState<TestimonialData | null>(null);
  const handleTestimonial = (data: TestimonialData) => {
    setTestimonialData(data);
    setTestimonialDetails(true);
  };
  const CloseTestimonial = () => {
    setTestimonialDetails(false);
    setTestimonialData(null);
  };
  const slideNext = () => {
    console.log(sliderRef.current);
    sliderRef.current?.slickNext();
  };
  const slidePrev = () => {
    console.log(sliderRef.current);
    sliderRef.current?.slickPrev();
  };
  return (
    <section className="ff-homepage-testimonial-wrapper">
      <div className="ff-homepage-testimonial-text">
        <div>
          Customer <span className="highlight-text">Testimonials</span>
        </div>
        <div>
          Leverage FireFlink’s Automation Center of Excellence (ACOE) to Elevate
          your Test Maturity Model
        </div>
      </div>
      <div className="ff-homepage-testimonial-blog">
        {testimonialDetails ? (
          <Card
            cardProperties={{
              background: "white",
              boxShadow: "0 0 66px rgba(0,0,0,0.4)",
              borderRadius: "32px",
              margin: "20px",
              padding: "20px",
            }}
            midContent={{
              isMidContent: true,
              content: (
                <div className="row">
                  <div className="testimonial_read_more_box">
                    <div className="testimonial-read-more-header">
                      <div className="testimonial_read_more_logo">
                        <Image
                          src={
                            testimonialData?.AuthorImage?.src ??
                            "/images/fireflink-logo.svg"
                          }
                          id={`${testimonialData?.ID}`}
                          alt="customer logo"
                          width={60}
                          height={60}
                        />
                      </div>
                    </div>

                    <div className="custom-scrollbar">
                      {testimonialData?.DESCRIPTION.split("\n").map(
                        (paragraph, index) => (
                          <p key={index}>
                            <i>{paragraph}</i>
                          </p>
                        )
                      )}
                      <span
                        className="highlight-text"
                        onClick={CloseTestimonial}
                      >
                        Read Less
                      </span>
                    </div>
                    <div className="d-flex mt_20 align-items-center testimonialsAuthor">
                      <div className="">
                        <Avatar variant="medium" iconName="user_profile" />
                      </div>
                      <div>
                        <h3>{testimonialData && testimonialData.NAME}</h3>
                        <h4>{testimonialData && testimonialData.ROLE}</h4>
                      </div>
                    </div>
                  </div>
                </div>
              ),
            }}
          />
        ) : (
          <Slider ref={sliderRef} className="SliderBanner" {...settings}>
            {TESTIMONIALS.map((item) => {
              return (
                <Card
                  key={item.ID}
                  cardProperties={{
                    width: "356px",
                    height: "400px",
                    background: "#ffffff",
                    borderRadius: "12px",
                    boxShadow: "none",
                    padding: "24px",
                  }}
                  headerContent={{
                    isHeader: true,
                    content: (
                      <div className="homepage-testimonial-card-header">
                        <Image
                          src={item.LOGO.src}
                          alt={"homepage-testimonial-brand-1"}
                          layout="intrinsic"
                          width={240}
                          height={53}
                        />
                      </div>
                    ),
                  }}
                  midContent={{
                    isMidContent: true,
                    content: (
                      <section className="ff-homepage-testimonial-card-mid-content">
                        <section className="ff-homepage-testimonial-card-mid-content-header">
                          <article>
                            {truncateText(item.DESCRIPTION, 140)}
                          </article>
                          <div
                            className="highlight-text"
                            onClick={() => {
                              if (item) handleTestimonial(item);
                            }}
                          >
                            {item?.DESCRIPTION.length > 140 ? "Read More" : ""}
                          </div>
                        </section>
                        <section className="homepage-testimonial-card-footer">
                          <span>
                            {item.AuthorImage ? (
                              <Image
                                src={item.AuthorImage.src}
                                alt={"homepage-testimonial-brand-1"}
                                width="60"
                                height="60"
                              />
                            ) : (
                              <span className="homepage-testimonial-card-footer-avatar">
                                {item.AuthorName}
                              </span>
                            )}
                          </span>
                          <span>
                            <section className="ff-homepage-testimonial-blog-footer-header">
                              {item.NAME}
                            </section>
                            <section className="ff-homepage-testimonial-blog-footer-sub">
                              {item.ROLE}
                            </section>
                          </span>
                        </section>
                      </section>
                    ),
                  }}
                  isSkeleton={false}
                />
              );
            })}
          </Slider>
        )}
      </div>
      <div className="homepage-testimonial-card-btn">
        <Image
          src={"/images/arrowLeft.svg"}
          className="arrow-border"
          alt="left arrow"
          width={20}
          height={20}
          onClick={slidePrev}
        />
        <Image
          src={"/images/arrowRight.svg"}
          alt="right arrow"
          className="arrow-border"
          width={20}
          height={20}
          onClick={slideNext}
        />
      </div>
      <div className="ff-homepage-testimonial-journey">
        <div className="ff-homepage-testimonial-journey-div"></div>
      </div>
    </section>
  );
};

export default Testimonial;
