import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';

const Index = () => {
  const services = [
    {
      id: 'topping',
      title: 'Бетонный пол с топпингом',
      description: 'Упрочненный верхний слой бетонного пола. Идеален для складов и производств с высокими нагрузками.',
      price: 'от 850 ₽/м²',
      link: '/service/topping'
    },
    {
      id: 'polished',
      title: 'Полированные бетонные полы',
      description: 'Эстетичное решение для торговых и офисных пространств. Глянцевая поверхность с зеркальным блеском.',
      price: 'от 1200 ₽/м²',
      link: '/service/polished'
    },
    {
      id: 'polymer',
      title: 'Полимерные наливные полы',
      description: 'Химически стойкие покрытия для пищевой, фармацевтической и химической промышленности.',
      price: 'от 1500 ₽/м²',
      link: '/service/polymer'
    },
    {
      id: 'paint',
      title: 'Окрасочные бетонные полы',
      description: 'Экономичное решение для защиты бетона от износа и пыления. Быстрый монтаж за 1-2 дня.',
      price: 'от 450 ₽/м²',
      link: '/service/paint'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 bg-primary text-primary-foreground shadow-md">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2">
              <Icon name="Building2" size={32} />
              <h1 className="text-2xl font-bold">ПромПол Эксперт</h1>
            </Link>
            <nav className="hidden md:flex gap-6">
              <a href="#services" className="hover:text-accent transition-colors">Услуги</a>
              <a href="#advantages" className="hover:text-accent transition-colors">Преимущества</a>
              <Link to="/blog/warehouse-floor-guide" className="hover:text-accent transition-colors">Блог</Link>
              <a href="#contact" className="hover:text-accent transition-colors">Контакты</a>
            </nav>
            <Button variant="secondary" className="hidden md:block">
              <Icon name="Phone" size={18} className="mr-2" />
              +7 (495) 123-45-67
            </Button>
          </div>
        </div>
      </header>

      <section className="relative h-[600px] bg-cover bg-center" style={{ backgroundImage: `url(https://cdn.poehali.dev/projects/f33c8c52-2095-4cbd-8b07-e4abdea0a59d/files/3c81b7ad-cc83-4089-aa31-9f80be94d6fc.jpg)` }}>
        <div className="absolute inset-0 bg-primary/80" />
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-center text-white">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 max-w-3xl">Промышленные и коммерческие полы под ключ</h2>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl">Устройство бетонных и полимерных полов для складов, производств и торговых центров. Опыт более 15 лет.</p>
          <div className="flex gap-4 flex-wrap">
            <a href="#services">
              <Button size="lg" variant="secondary">
                Наши услуги
                <Icon name="ArrowRight" size={20} className="ml-2" />
              </Button>
            </a>
            <a href="#contact">
              <Button size="lg" className="bg-accent hover:bg-accent/90">
                <Icon name="Calculator" size={20} className="mr-2" />
                Рассчитать стоимость
              </Button>
            </a>
          </div>
        </div>
      </section>

      <section id="advantages" className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-12">Почему выбирают нас</h3>
          <div className="grid md:grid-cols-4 gap-8">
            <Card>
              <CardContent className="pt-6 text-center">
                <div className="bg-accent text-accent-foreground w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Award" size={32} />
                </div>
                <h4 className="font-bold mb-2">Опыт 15+ лет</h4>
                <p className="text-muted-foreground">Более 200 реализованных объектов</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 text-center">
                <div className="bg-accent text-accent-foreground w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Shield" size={32} />
                </div>
                <h4 className="font-bold mb-2">Гарантия 5 лет</h4>
                <p className="text-muted-foreground">Полная ответственность за качество</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 text-center">
                <div className="bg-accent text-accent-foreground w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Users" size={32} />
                </div>
                <h4 className="font-bold mb-2">Собственная бригада</h4>
                <p className="text-muted-foreground">Проверенные специалисты</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 text-center">
                <div className="bg-accent text-accent-foreground w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Clock" size={32} />
                </div>
                <h4 className="font-bold mb-2">Точные сроки</h4>
                <p className="text-muted-foreground">Соблюдение договорных обязательств</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="services" className="py-20">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-4">Наши услуги</h3>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Профессиональное устройство промышленных и коммерческих полов для любых задач и бюджетов
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service) => (
              <Card key={service.id} className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <h4 className="text-xl font-bold mb-3">{service.title}</h4>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-accent">{service.price}</span>
                    <Link to={service.link}>
                      <Button>
                        Подробнее
                        <Icon name="ArrowRight" size={18} className="ml-2" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-4">Этапы работ</h3>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Прозрачный процесс от консультации до сдачи объекта
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-background p-6 rounded-lg">
              <div className="bg-accent text-accent-foreground w-12 h-12 rounded-full flex items-center justify-center mb-4 font-bold text-xl">1</div>
              <h4 className="font-bold mb-2">Консультация и замер</h4>
              <p className="text-muted-foreground">Бесплатный выезд специалиста на объект. Оценка состояния основания и расчет стоимости.</p>
            </div>
            <div className="bg-background p-6 rounded-lg">
              <div className="bg-accent text-accent-foreground w-12 h-12 rounded-full flex items-center justify-center mb-4 font-bold text-xl">2</div>
              <h4 className="font-bold mb-2">Договор и подготовка</h4>
              <p className="text-muted-foreground">Заключение договора с фиксацией цены и сроков. Подготовка основания и доставка материалов.</p>
            </div>
            <div className="bg-background p-6 rounded-lg">
              <div className="bg-accent text-accent-foreground w-12 h-12 rounded-full flex items-center justify-center mb-4 font-bold text-xl">3</div>
              <h4 className="font-bold mb-2">Монтаж и сдача</h4>
              <p className="text-muted-foreground">Выполнение работ с соблюдением технологии. Контроль качества и сдача объекта с гарантией.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-4">Полезные статьи</h3>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Экспертные материалы о выборе и эксплуатации промышленных полов
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                  <Icon name="Calendar" size={16} />
                  <span>15 октября 2024</span>
                </div>
                <h4 className="font-bold mb-3">Как выбрать промышленный пол для склада</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Полное руководство по выбору напольного покрытия для складских помещений с учетом нагрузок и условий эксплуатации.
                </p>
                <Link to="/blog/warehouse-floor-guide">
                  <Button variant="outline" size="sm">
                    Читать статью
                    <Icon name="ArrowRight" size={16} className="ml-2" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                  <Icon name="Calendar" size={16} />
                  <span>10 октября 2024</span>
                </div>
                <h4 className="font-bold mb-3">Топпинг или полимер: что выбрать</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Сравнительный анализ двух популярных решений для производственных помещений.
                </p>
                <Button variant="outline" size="sm" disabled>
                  Скоро
                </Button>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                  <Icon name="Calendar" size={16} />
                  <span>5 октября 2024</span>
                </div>
                <h4 className="font-bold mb-3">Технология устройства полов с топпингом</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Подробное описание процесса создания промышленного пола с упрочненным слоем.
                </p>
                <Button variant="outline" size="sm" disabled>
                  Скоро
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-4xl font-bold mb-6">Получите бесплатный расчет стоимости</h3>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Оставьте заявку, и наш специалист свяжется с вами в течение 30 минут. Рассчитаем точную стоимость и подберем оптимальное решение.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" variant="secondary">
              <Icon name="Phone" size={20} className="mr-2" />
              Позвонить сейчас
            </Button>
            <Button size="lg" className="bg-accent hover:bg-accent/90">
              <Icon name="MessageSquare" size={20} className="mr-2" />
              Заказать звонок
            </Button>
          </div>
        </div>
      </section>

      <footer className="bg-muted py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Building2" size={28} className="text-primary" />
                <h4 className="font-bold text-lg">ПромПол Эксперт</h4>
              </div>
              <p className="text-sm text-muted-foreground">
                Профессиональное устройство промышленных и коммерческих полов с 2009 года
              </p>
            </div>
            <div>
              <h5 className="font-bold mb-4">Услуги</h5>
              <ul className="space-y-2 text-sm">
                <li><Link to="/service/topping" className="text-muted-foreground hover:text-accent">Полы с топпингом</Link></li>
                <li><Link to="/service/polished" className="text-muted-foreground hover:text-accent">Полированные полы</Link></li>
                <li><Link to="/service/polymer" className="text-muted-foreground hover:text-accent">Полимерные полы</Link></li>
                <li><Link to="/service/paint" className="text-muted-foreground hover:text-accent">Окрасочные полы</Link></li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold mb-4">Информация</h5>
              <ul className="space-y-2 text-sm">
                <li><Link to="/blog/warehouse-floor-guide" className="text-muted-foreground hover:text-accent">Блог</Link></li>
                <li><a href="#advantages" className="text-muted-foreground hover:text-accent">О компании</a></li>
                <li><a href="#contact" className="text-muted-foreground hover:text-accent">Контакты</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold mb-4">Контакты</h5>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <Icon name="Phone" size={16} className="text-accent" />
                  <span>+7 (495) 123-45-67</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Mail" size={16} className="text-accent" />
                  <span>info@prompol.ru</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="MapPin" size={16} className="text-accent" />
                  <span>Москва и МО</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t pt-8 text-center text-sm text-muted-foreground">
            <p>© 2024 ПромПол Эксперт. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
