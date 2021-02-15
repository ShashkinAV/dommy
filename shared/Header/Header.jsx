import styled from '../../styles/Header.module.sass';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';


const Header = (props) => {
	return (
	
				<>
				<div className={styled.topbar}>
					<div className={styled.social}>
						<a href="http://facebook.com" className={styled.social__link}>
						<FontAwesomeIcon icon={['fab', 'facebook']} className={styled.social__icon} />
						</a>
						<a href="http://instagram.com" className={styled.social__link}>
						<FontAwesomeIcon icon={['fab', 'instagram']} className={styled.social__icon} />
						</a>
					</div>
					<div className={styled.lang}>
						<a href="#" className={styled.lang__link}>
							
						<img className={styled.lang__icon} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAALCAIAAAD5gJpuAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAE2SURBVHjaYvz69T8DAvz79w9CQVj/0MCffwwAAcQClObiAin6/x+okxHMgPCAbOb//5n+I4EXL74ABBALxGSwagTjPzbAyMgItAQggBg9Pf9nZPx//x7kjL9////9C2QAyf9//qCQQCQkxFhY+BEggFi2b/+nq8v46BEDSPQ3w+8//3//BqFfv9BJeXmQEwACCOSkP38YgHy4Bog0RN0vIOMXVOTPH6Cv/gEEEEgDxFKgHEgDXCmGDUAE1AAQQCybGZg1f/d8//XsH0jTn3+///z79RtE/v4NZfz68xfI/vOX+4/0ZoZFAAHE4gYMvD+3/v2+h91wCANo9Z+/jH9VxBkYAAKIBRg9TL//MEhKAuWAogxgZzGC2CCfgUggAoYdGAEVAwQQ41egu5AQAyoXTQoIAAIMAD+JZR7YOGEWAAAAAElFTkSuQmCC" />
							Русский</a>
						<a href="#" className={styled.lang__link}>
						<img className={styled.lang__icon} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAALCAIAAAD5gJpuAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAGQSURBVHjaYvzIgAD/YCQyA47+gAUBAnAYBikAwCAM8zDYo/2Vz9oX2uqKkIQcezPd6Q4jDRXicAHcAHr/VX0BxALW9v/fk6cgpUD0+zcD619G2d8MjL//Xfz978vv/79//fv1CyjOJCsLtAQggFj+gZT/R6hm/Mvi84vJ6A/D39+Mmr9+Lvj17+vv/2ANQARUDBBATCALQM6A2s6k8YtR+fefk7/+HP/FqPSLWfMXSPUvqCVADQABxATy35+/EAP+//rNKPr7P/Ov/y9+/X3+6x/jr/8yMCcB0R+gbxgAAghkw3+IF38Dzfj19+Evhq+//vP/YhD6+f/Lr39PfkJVAy0BOpiBASCAwH74/RtiAMOvX3/O/WbU/sVk8Pv/399/r/76vf/3/59gxwBd++cPUDFAAIE1QDwAddWvH7N+Men//v/j15+zv/99BIn8+/Mb5Oy/f4FOAgggiA1/GCUlGUGe/guUAzHugwNA8Dcj7x+Q2ZAw/PsX6CSAAGJ8Do7CfzASM3YhsQ6JZqCPAQIMAPbnVIL0Z19UAAAAAElFTkSuQmCC" />
							Кыргыз тили</a>
					</div>
				</div>
				<header className={styled.navbar}>
					<div className={styled.navbar__brand}>
						<a className={styled.navbar__logoLink}>
							<Image 
								src="/images/logo1.webp"
								alt='Dommy.kg'
								width='250'
								height='39'
							/>
						</a>
					</div>
					<ul className={styled.navbar__list}>
						<li className={styled.navbar__item}><Link className={styled.navbar__link} href={'/'}><a>Главная</a></Link></li>
						<li className={styled.navbar__item}><Link className={styled.navbar__link} href={'/catalog'}><a>Каталог объектов</a></Link></li>
						<li className={styled.navbar__item}><Link className={styled.navbar__link} href={'/map'}><a>Карта объектов</a></Link></li>
						<li className={styled.navbar__item}><Link className={styled.navbar__link} href={'/developers'}><a>Застройщики</a></Link></li>
						<li className={styled.navbar__item}><Link className={styled.navbar__link} href={'/news'}><a>Новости</a></Link></li>
					</ul>
				</header>
				</>
	)
}

export default Header;
