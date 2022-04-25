import React from 'react';
import Suggestion from "../../components/main/suggestion/suggestion";
import styles from './main.module.css';
import image from '../../bdsim/suggestion/image.png';
import about from '../../bdsim/about/about.png';
import WhyWe from "../../components/main/whywe/whywe";

const Main = () => {
    return (
        <div className='content'>
            <Suggestion title='Успей купить!' image={image} discount={50} background={'#AB2B324D'}></Suggestion>
            <h2 className='h1' style={{textAlign: 'left'}}>О нас</h2>
            <div /*image={{src: about, align: 'right'}}*/>
                <p>
                    ООО "Инвест" – более 5 лет является структурным подразделением в России и странах СНГ международного конгломерата «Unit Сlean», являющегося одним из мировых лидеров в разработке, производстве и внедрении безопасных для окружающей среды и человека химических средств для очистки различных видов поверхностей практически от любых видов загрязнений, а также средств специального (узкого назначения) для различных отраслей промышленности и народного хозяйства. Глубокие экспертные знания и опыт компании лежат в основе эффективности наших средств, зарекомендовавших себя во всем мире. Ассортимент включает в себя передовые продукты для типовых работ, а также ряд специализированных продуктов для борьбы со сложными загрязнениями и т.д.
                </p>
                <p>
                    Собственное производство в России и многолетние устойчивые связи с производителями сырья позволяют нам обеспечить для наших партеров максимально выгодные цены и другие условия сохраняя высочайшее качество продукта.
                </p>
            </div>
            <WhyWe></WhyWe>
            <h2 className='h1' style={{textAlign: 'left'}}>Товары</h2>
            <div className={styles.products}></div>
        </div>
    );
};

export default Main;