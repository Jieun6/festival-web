import styled from "styled-components";
import { Link } from "react-router-dom";

const Header = styled.div`
  box-sizing: border-box;
  margin-bottom: 0.6rem;
  font-size: 1rem;
  font-weight: 900;
`;

const FestivalTable = styled.table`
  width: 100%;
`;

const FestivalTr = styled.tr`
  height: 2.2rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  border: 0.1rem solid;
  border-top: ${(props) => (props.isfirst ? "0.1rem solid" : "0rem;")};
  background-color: ${(props) => (props.iscolored ? "rgb(208, 235, 201)" : "white")};
`;

const LocalLogoTd = styled.td`
  width: 6rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const LocalLabel = styled.div`
  box-sizing: border-box;
  width: 4rem;
  line-height: 1.5rem;
  text-align: center;
  height: 1.6rem;
  border-radius: 2rem;
  font-size: 0.9rem;
  color: white;
  background-color: #2b2424;
`;

const TitleLabelTd = styled.td`
  width: calc(100% - 18rem);
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-weight: 800;
  text-decoration: underline;
`;

const DateLabelTd = styled.td`
  width: 12rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: red;
`;

const FestivalLink = styled(Link)`
  color: black;
`;

function TableRow({ festivalData, ix }) {
  return (
    <FestivalTr iscolored={ix % 2 === 0 ? 1 : 0} isfirst={ix === 0 ? 1 : 0}>
      <LocalLogoTd>
        <LocalLabel>{festivalData.location}</LocalLabel>
      </LocalLogoTd>
      <TitleLabelTd>
        <FestivalLink to={`/festival_detail/${festivalData.id}`}>{festivalData.name}</FestivalLink>
      </TitleLabelTd>
      <DateLabelTd>
        {`${festivalData.date[0].replace("-", ".").trim()}. ~
                     ${festivalData.date[1].replace("-", ".").trim()}`}
      </DateLabelTd>
    </FestivalTr>
  );
}

function TodayFestivalBox({ todayFestivals }) {
  return (
    <>
      <Header>{"오늘의 축제 소식"}</Header>
      <FestivalTable>
        <tbody>
          {todayFestivals.map((el, ix) => (
            <TableRow key={ix} festivalData={el} ix={ix} />
          ))}
        </tbody>
      </FestivalTable>
    </>
  );
}

export default TodayFestivalBox;
