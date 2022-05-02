import React from 'react';
import {H2Main} from "components/shared/fonts/specialFonts";
import styled from "styled-components";
import about from "src/bdsim/about/about.png";

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

const About = () => {
    return (
        <div>
            <Header>О нас</Header>
            <Text>
                <Image src={about} />
                <p>
                    ООО "Инвест" – более 5 лет является структурным подразделением в России и странах СНГ международного конгломерата «Unit Сlean», являющегося одним из мировых лидеров в разработке, производстве и внедрении безопасных для окружающей среды и человека химических средств для очистки различных видов поверхностей практически от любых видов загрязнений, а также средств специального (узкого назначения) для различных отраслей промышленности и народного хозяйства. Глубокие экспертные знания и опыт компании лежат в основе эффективности наших средств, зарекомендовавших себя во всем мире. Ассортимент включает в себя передовые продукты для типовых работ, а также ряд специализированных продуктов для борьбы со сложными загрязнениями и т.д.
                </p>
                <p>
                    Собственное производство в России и многолетние устойчивые связи с производителями сырья позволяют нам обеспечить для наших партеров максимально выгодные цены и другие условия сохраняя высочайшее качество продукта.
                </p>
            </Text>
        </div>
    );
};

export default About;