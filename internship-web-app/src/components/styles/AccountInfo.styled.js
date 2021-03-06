import styled from "styled-components";

export const StyledAccountInfo = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: flex-end;
    align-self: flex-end;
    gap: 16px;
    margin: .5em 0;

    @media (max-width: 768px) {
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        align-self: flex-start;
    }

    @media (max-width: 600px) {
        flex-direction: column;
        align-items: flex-start;
    }

    
`