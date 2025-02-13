import styled from "styled-components"

export const TransactionsContainer = styled.main`
    width: 100%;
    max-width: 1120px;
    margin: 4rem auto 0; //em cima, nas laterais e abaixo
    padding: 0 1.5rem;
`;

export const TransactionsTable = styled.table`
    width: 100%;
    border-collapse: separate; //separar as linhas da tabela
    border-spacing: 0 0.5rem; // laterais | verticalmente, colocando o espaçamento entre cada linha
    margin-top: 1.5rem;

    td {
        padding: 1.25rem 2rem;
        background: ${(props) => props.theme["gray-700"]};

        &:first-child {
            border-top-left-radius: 6px;
            border-bottom-left-radius: 6px;
        }

        &:last-child {
            border-top-right-radius: 6px;
            border-bottom-right-radius: 6px;
        }
    }
`;

interface PriceHighlightProps {
    variant: "income" | "outcome";
}

export const PriceHighlight = styled.span<PriceHighlightProps>`
    color: ${props => props.variant == "income" ? props.theme["green-300"] : props.theme["red-300"]};
`;