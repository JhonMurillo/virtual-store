import React from 'react'
import {
    CardImg,
    CardText,
    CardBody,
    CardTitle,
    CardSubtitle,
    Button
} from 'reactstrap';
import { CardDiv, FormatNumber } from "./styles";

const  DEFAULT_IMAGE = 'https://exitocol.vtexassets.com/arquivos/ids/1454015-500-auto?width=500&height=auto&aspect=true'


export const CardProduct = ({name, title, price_old, main_image, price , has_offer}) => {
    return (
        <>
            <CardDiv>
                <CardImg top width="100%" src={main_image} alt={name} />
                <CardBody>
                    <CardTitle>{name}</CardTitle>
                    <CardSubtitle>{title}</CardSubtitle>
                    <CardText>
                        <FormatNumber fontSize='20px' color='green' has_decoration={false} value={price} displayType={'text'} thousandSeparator={true} prefix={'$'} />
                    </CardText>
                    <CardText>
                        <FormatNumber fontSize='15px' color='red' has_decoration={true} value={price_old} displayType={'text'} thousandSeparator={true} prefix={'$'} />
                    </CardText>
                    <CardText>
                        <FormatNumber fontSize='15px' color='green' has_decoration={false} value={price} displayType={'text'} thousandSeparator={true} prefix={'$'} />
                    </CardText>
                    <Button>Comprar</Button>
                </CardBody>
            </CardDiv>
        </>
    );
};