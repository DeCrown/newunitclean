import React, {useEffect, useState} from 'react';
import {H2Main} from "components/shared/fonts/specialFonts";
import styled from "styled-components";
import main_image from "src/images/main_image.jpg";
import text from "src/images/about.txt";

const Header = styled(H2Main)`
  text-align: left;
  padding-top: 0;
  margin-left: 20px;
  
  .mobile & {
    text-align: center;
    padding: 74px 50px 17px 50px;
    margin: 0;
  }
`;

const Text = styled.div`
  font-size: ${({ theme }) => theme.font.size[13]};
  font-weight: ${({ theme }) => theme.font.weight[400]};
  color: ${({ theme }) => theme.font.color.black};
  text-align: left;
  user-select: text;
`;

const Image = styled.img`
  width: 60%;
  margin: 0 20px 20px 20px;
  float: right;
  
  .mobile & {
    width: 100%;
    margin: 0 0 30px 0;
    float: none;
  }
`;

const Point = styled.p`
  text-indent: 4em;
  margin: 4px 0;
`;

const About = () => {

    return (
        <div>
            <Header>О нас</Header>
            <Text>
                <Image src={main_image} />
                <p>
                    Компания "Инвест" – производитель автохимии, автокосметики и средств для клининга. Представлена на российском рынке более пяти лет. Производит продукцию как под собственным брендом UNIT CLEAN, так и под другими торговыми марками по заказу клиентов. Поставляет продукцию в разные регионы России, а также в некоторые страны СНГ.
                </p>
                <p>
                    В линейке продуктов присутствуют автошампуни для бесконтактной и ручной мойки, сопутствующие средства по уходу за автомобилем и средства для клининга, как для бытового, так и для промышленного использования. В основе рецептур представлены компоненты как мировых лидеров в области химии, так и российских производителей.
                </p>
                <p>
                    Комплексный подход в решении задач клиента – наш главный приоритет в работенад качествомпродукциии расширением ассортимента.
                </p>
                <p>
                    Наличие собственного производства и базы для тестирования продукции в разных регионах, многолетние устойчивые связи с производителями и поставщиками сырья, сотрудничество с высокопрофессиональными опытными технологами, позволяют:
                </p>
                <Point>
                    - в короткие сроки реализовывать собственные инновационные решения в разработке и производстве автохимии, автокосметики и средств для клининга;
                </Point>
                <Point>
                    - оперативно решать задачи клиентов и предоставлять максимально выгодные условия;
                </Point>
                <Point>
                    - поддерживать неизменно высокое качество продукции.
                </Point>
                <p>
                    Компания сотрудничает как с дилерами, так и с конечными покупателями напрямую.
                </p>
            </Text>
        </div>
    );
};

export default About;