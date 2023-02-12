import React from "react";
import Header from "../../Templates/Layout/Header";
import Page from "../../Templates/Layout/Page";
import Body from "../../Templates/Layout/Body";
import CategoryBox from "../../Molecules/Category/CategoryBox";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
const FlexBox = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  flex-wrap: wrap;
  column-gap: 8px;
  row-gap: 8px;
  align-items: flex-start;
  overflow-y: scroll;
  justify-content: space-around;
`;

export default function Category() {
  const categories = [
    {
      name: "인기",
      src: "/image/category/인기.png",
    },
    {
      name: "디지털기기",
      src: "/image/category/디지털기기.png",
    },
    {
      name: "생활가전",
      src: "/image/category/생활가전.png",
    },
    {
      name: "가구",
      src: "/image/category/가구.png",
    },
    {
      name: "생활/주방",
      src: "/image/category/생활주방.png",
    },
    {
      name: "유아용품",
      src: "/image/category/유아용품.png",
    },
    {
      name: "유아도서",
      src: "/image/category/유아도서.png",
    },
    {
      name: "여성의류",
      src: "/image/category/여성의류.png",
    },
    {
      name: "여성잡화",
      src: "/image/category/여성잡화.png",
    },
    {
      name: "남성의류",
      src: "/image/category/남성의류.png",
    },
    {
      name: "남성잡화",
      src: "/image/category/남성잡화.png",
    },
    {
      name: "뷰티/미용",
      src: "/image/category/뷰티미용.png",
    },
    {
      name: "스포츠",
      src: "/image/category/스포츠.png",
    },
    {
      name: "취미/게임",
      src: "/image/category/취미게임.png",
    },
    {
      name: "음반",
      src: "/image/category/음반.png",
    },
    {
      name: "도서",
      src: "/image/category/도서.png",
    },
    {
      name: "티켓",
      src: "/image/category/ticket.png",
    },
    {
      name: "반려동물",
      src: "/image/category/반려동물.png",
    },
    {
      name: "식물",
      src: "/image/category/식물.png",
    },
    {
      name: "기타",
      src: "/image/category/기타.png",
    },
  ];
  const navigate = useNavigate();
  function goTo(name) {
    navigate("/search", { state: { category: name, isResult: true } });
  }
  return (
    <Page>
      <Header isName={true} headerName="카테고리" />
      <Body>
        <FlexBox>
          {categories.map((box, index) => {
            return (
              <CategoryBox
                key={index}
                name={box.name}
                //   imgSrc={box.src}
                imgSrc={"/image/category/" + index + ".png"}
                clicked={() => goTo(box.name)}
                //카테고리 전달해주기
              />
            );
          })}
        </FlexBox>
      </Body>
    </Page>
  );
}
