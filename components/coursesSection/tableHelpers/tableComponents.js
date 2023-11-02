import styled from "styled-components";

export const OuterPageContainer = styled.div`
  display: flex;
  flex-direction:column;
  justify-content:flex-start;
  align-items: center;
  width:100%;
  //max-width: 1400px;
  margin-top:1rem;
  min-height:100vh;
  height: fit-content;
  @media screen and (max-width: 1200px) {
    gap:10px;
  }
`;

// The most outer container
export const TableHeaderWrapper = styled.div`
    width: 100%;
    margin-bottom: 20px;
    height: fit-content;
    margin-top: 10px;
    overflow-y: auto;
    overflow-x:hidden;  
    overflow-anchor: none; // Add this lin

  ::-webkit-scrollbar {
    height: 6px;
    width: 7px;
    background: #000;
  }

  ::-webkit-scrollbar-thumb {
      background: #ffffff99;
      -webkit-border-radius: 1ex;
      border-radius: 1ex;
      -webkit-box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.75);
      box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.75);
  }

  ::-webkit-scrollbar-corner {
      background: #00000000;
  }

  @media screen and (max-width:1300px) {  
    padding: 0px;
    overflow-x: auto;
  }
`;

export const OuterContainer = styled.div`
    width: 100%;
    height: fit-content;
    //max-height: calc(100vh - 300px);
    max-height: ${({ maxHeight }) => maxHeight ?? `calc(100vh - 260px)`};
    transition: max-height 1s ease-in-out;
    overflow-x: hidden;
    overflow-y:auto;

    @media screen and (max-width:1300px) {
        width:100%;
        min-width: 1200px;
        padding: 0px;
        padding-bottom: 15px;
    
    }

    @media screen and (max-width:800px) {
      min-width: 1000px;
    }

`;

export const MarketTileContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction:column;
    justify-content:space-between;
    align-items: center;
    height: fit-content;
    width: 100%;
    padding-bottom: 20px;

    @media screen and (max-width:1300px) {
    width:100%;
    min-width: 700px;
    padding: 0px;
    padding-bottom: 15px;
    }
`;

export const RowData = styled.span`
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 1.15rem;
    line-height:1.2rem;
    font-weight: 400;
    letter-spacing: 0.4px;
    text-align: ${props => props.aligned};
    max-width: 100%;
    color: ${props => props.color ? props.color : '#F1F1F1'} ;
    flex: ${props => props.flex};
    min-width: 70px;
    transition: all .4s;

    @media screen and (max-width:800px) {
      font-size: 15px;
      line-height: 20px;
      width: fit-content;
      padding: 0px;
      text-align: left;
      padding-left: 10px;

    }
`;

export const ButtonDiv = styled.div`
  display: flex;
  flex-direction:row;
  align-items: center;
  justify-content: center;
  width:15px;
`;

export const LeftTable = styled.div`
  display: flex;
  flex-direction:row;
  align-items: center;
  box-sizing: border-box;
  justify-content: space-between;
  width: 100%;
  height: 50px;
  border-bottom: 0.5px solid #ffffff99;
  @media screen and (max-width:650px) {
    padding:0;
  }
`;

export const TableHeaderContainer = styled.div`
  display: flex;
  flex-direction:row;
  align-items: center;
  box-sizing: border-box;
  justify-content: space-between;
  width:100%; 
  gap:5px;

  @media screen and (max-width:1300px) {
    padding:0;
    min-width: 1200px;
  }

  @media screen and (max-width:800px) {
    padding:0;
    min-width: 1000px;
  }

`;

export const OuterTableRow = styled.div`
  display: flex;
  flex-direction:row;
  align-items: center;
  justify-content: center;
  width: 100%;
  transition: all .4s;
`;

export const InnerTableRow = styled.div`
  display: flex;
  flex-direction:row;
  align-items: center;
  box-sizing: border-box;
  justify-content: space-between;
  height: 100%;
  width:100%;
  height: 60px;
  border-bottom: 0.5px solid #ffffff50;
  transition: all .4s;

`;

export const RowButtonDiv = styled.div`
  display: flex;
  flex-direction:column;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  gap:8px;
  width: 45px;
  padding-right: 5px;
`;