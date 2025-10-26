import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeTab, setActiveTab] = useState('main');

  const services = [
    {
      id: 'topping',
      title: 'Бетонный пол с топпингом',
      description: 'Упрочненный верхний слой бетонного пола с использованием сухих смесей. Идеален для складов и производственных помещений с высокими нагрузками.',
      features: ['Износостойкость', 'Беспыльность', 'Срок службы 20+ лет', 'Выдерживает интенсивные нагрузки'],
      price: 'от 850 ₽/м²'
    },
    {
      id: 'polished',
      title: 'Полированные бетонные полы',
      description: 'Эстетичное решение для торговых и офисных пространств. Глянцевая поверхность с высокими декоративными свойствами.',
      features: ['Зеркальный блеск', 'Легкая уборка', 'Современный дизайн', 'Долговечность'],
      price: 'от 1200 ₽/м²'
    },
    {
      id: 'polymer',
      title: 'Полимерные наливные полы',
      description: 'Химически стойкие покрытия для пищевой, фармацевтической и химической промышленности. Идеальная гигиеничность.',
      features: ['Химическая стойкость', 'Антистатичность', 'Бесшовная поверхность', 'Гигиеничность'],
      price: 'от 1500 ₽/м²'
    },
    {
      id: 'paint',
      title: 'Окрасочные бетонные полы',
      description: 'Экономичное решение для защиты бетона от износа и пыления. Подходит для помещений с умеренными нагрузками.',
      features: ['Беспыльность', 'Защита от влаги', 'Доступная цена', 'Быстрый монтаж'],
      price: 'от 450 ₽/м²'
    }
  ];

  const projects = [
    {
      title: 'Логистический центр "Север"',
      area: '12 000 м²',
      type: 'Бетонный пол с топпингом',
      year: '2024',
      image: 'https://cdn.poehali.dev/projects/f33c8c52-2095-4cbd-8b07-e4abdea0a59d/files/3c81b7ad-cc83-4089-aa31-9f80be94d6fc.jpg'
    },
    {
      title: 'Производственный комплекс "ТехноПром"',
      area: '8 500 м²',
      type: 'Полимерные наливные полы',
      year: '2024',
      image: 'https://cdn.poehali.dev/projects/f33c8c52-2095-4cbd-8b07-e4abdea0a59d/files/381d7936-80bb-45aa-9757-2b6c7c9d5452.jpg'
    },
    {
      title: 'Складской комплекс "Мега-Холдинг"',
      area: '15 000 м²',
      type: 'Бетонный пол с топпингом',
      year: '2023',
      image: 'https://cdn.poehali.dev/projects/f33c8c52-2095-4cbd-8b07-e4abdea0a59d/files/df4ccab9-f996-447a-a46d-66f3cd6cc7c7.jpg'
    }
  ];

  const articles = [
    {
      title: 'Как выбрать промышленный пол для склада',
      excerpt: 'Складские помещения требуют особого подхода к выбору напольного покрытия. Разбираем ключевые факторы: тип складируемой продукции, интенсивность движения техники, температурный режим и бюджет проекта.',
      date: '15 октября 2024',
      category: 'Выбор покрытия'
    },
    {
      title: 'Топпинг или полимер: что выбрать для производства',
      excerpt: 'Сравнительный анализ двух популярных решений для производственных помещений. Рассматриваем эксплуатационные характеристики, стоимость владения и срок службы каждого типа покрытия.',
      date: '10 октября 2024',
      category: 'Сравнение технологий'
    },
    {
      title: 'Технология устройства бетонных полов с упрочненным слоем',
      excerpt: 'Подробное описание процесса создания промышленного пола с топпингом: от подготовки основания до финишной затирки. Этапы работ, используемые материалы и контроль качества.',
      date: '5 октября 2024',
      category: 'Технологии монтажа'
    },
    {
      title: 'Полимерные полы для пищевого производства: требования и стандарты',
      excerpt: 'Пищевая промышленность предъявляет жесткие требования к напольным покрытиям. Изучаем санитарные нормы, химическую стойкость и особенности эксплуатации полимерных полов на пищевых объектах.',
      date: '28 сентября 2024',
      category: 'Отраслевые решения'
    },
    {
      title: 'Ремонт промышленных полов: когда и как проводить',
      excerpt: 'Признаки износа промышленного пола и методы их устранения. Превентивное обслуживание, локальный и капитальный ремонт. Продление срока службы напольных покрытий.',
      date: '20 сентября 2024',
      category: 'Эксплуатация и ремонт'
    },
    {
      title: 'Расчет стоимости промышленного пола: из чего складывается цена',
      excerpt: 'Детальный разбор ценообразования на устройство промышленных полов. Факторы, влияющие на стоимость: площадь объекта, тип покрытия, состояние основания, логистика материалов.',
      date: '12 сентября 2024',
      category: 'Ценообразование'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 bg-primary text-primary-foreground shadow-md">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon name="Building2" size={32} />
              <h1 className="text-2xl font-bold">ПромПол Эксперт</h1>
            </div>
            <nav className="hidden md:flex gap-6">
              <button onClick={() => setActiveTab('main')} className="hover:text-accent transition-colors">Главная</button>
              <button onClick={() => setActiveTab('services')} className="hover:text-accent transition-colors">Услуги</button>
              <button onClick={() => setActiveTab('projects')} className="hover:text-accent transition-colors">Объекты</button>
              <button onClick={() => setActiveTab('blog')} className="hover:text-accent transition-colors">Блог</button>
              <button onClick={() => setActiveTab('contacts')} className="hover:text-accent transition-colors">Контакты</button>
            </nav>
            <Button variant="secondary" className="hidden md:block">
              <Icon name="Phone" size={18} className="mr-2" />
              +7 (495) 123-45-67
            </Button>
          </div>
        </div>
      </header>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsContent value="main" className="mt-0">
          <section className="relative h-[600px] bg-cover bg-center" style={{ backgroundImage: `url(https://cdn.poehali.dev/projects/f33c8c52-2095-4cbd-8b07-e4abdea0a59d/files/3c81b7ad-cc83-4089-aa31-9f80be94d6fc.jpg)` }}>
            <div className="absolute inset-0 bg-primary/80" />
            <div className="relative container mx-auto px-4 h-full flex flex-col justify-center text-white">
              <h2 className="text-5xl md:text-6xl font-bold mb-6 max-w-3xl">Промышленные и коммерческие полы под ключ</h2>
              <p className="text-xl md:text-2xl mb-8 max-w-2xl">Устройство бетонных и полимерных полов для складов, производств и торговых центров. Опыт более 15 лет.</p>
              <div className="flex gap-4">
                <Button size="lg" variant="secondary" onClick={() => setActiveTab('services')}>
                  Наши услуги
                  <Icon name="ArrowRight" size={20} className="ml-2" />
                </Button>
                <Button size="lg" className="bg-accent hover:bg-accent/90">
                  <Icon name="Calculator" size={20} className="mr-2" />
                  Рассчитать стоимость
                </Button>
              </div>
            </div>
          </section>

          <section className="py-20 bg-muted">
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

          <section className="py-20">
            <div className="container mx-auto px-4">
              <h3 className="text-3xl font-bold text-center mb-12">Основные виды услуг</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {services.slice(0, 4).map((service) => (
                  <Card key={service.id} className="hover:shadow-lg transition-shadow">
                    <CardContent className="pt-6">
                      <h4 className="text-xl font-bold mb-3">{service.title}</h4>
                      <p className="text-muted-foreground mb-4">{service.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-2xl font-bold text-accent">{service.price}</span>
                        <Button onClick={() => setActiveTab('services')}>Подробнее</Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          <section className="py-20 bg-primary text-primary-foreground">
            <div className="container mx-auto px-4 text-center">
              <h3 className="text-4xl font-bold mb-6">Получите бесплатный расчет стоимости</h3>
              <p className="text-xl mb-8 max-w-2xl mx-auto">Оставьте заявку, и наш специалист свяжется с вами в течение 30 минут</p>
              <Button size="lg" variant="secondary">
                <Icon name="MessageSquare" size={20} className="mr-2" />
                Заказать расчет
              </Button>
            </div>
          </section>
        </TabsContent>

        <TabsContent value="services" className="mt-0">
          <section className="py-20">
            <div className="container mx-auto px-4">
              <h2 className="text-4xl font-bold mb-4 text-center">Наши услуги</h2>
              <p className="text-xl text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
                Профессиональное устройство промышленных полов для любых задач и бюджетов
              </p>
              
              <div className="space-y-6">
                {services.map((service) => (
                  <Card key={service.id} className="overflow-hidden">
                    <CardContent className="p-8">
                      <div className="flex flex-col md:flex-row gap-6">
                        <div className="flex-1">
                          <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                          <p className="text-lg text-muted-foreground mb-6">{service.description}</p>
                          <div className="grid grid-cols-2 gap-4 mb-6">
                            {service.features.map((feature, idx) => (
                              <div key={idx} className="flex items-center gap-2">
                                <Icon name="Check" size={20} className="text-accent flex-shrink-0" />
                                <span>{feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                        <div className="md:w-64 flex flex-col justify-between">
                          <div>
                            <div className="text-sm text-muted-foreground mb-2">Стоимость</div>
                            <div className="text-3xl font-bold text-accent mb-6">{service.price}</div>
                          </div>
                          <Button className="w-full">
                            <Icon name="Phone" size={18} className="mr-2" />
                            Заказать
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Card className="mt-12 bg-muted">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6">Часто задаваемые вопросы</h3>
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                      <AccordionTrigger>Какой срок службы промышленного пола?</AccordionTrigger>
                      <AccordionContent>
                        Срок службы зависит от типа покрытия и условий эксплуатации. Бетонные полы с топпингом служат 20-30 лет, полимерные покрытия - 15-20 лет при соблюдении правил эксплуатации. Мы даем гарантию 5 лет на все виды работ.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                      <AccordionTrigger>Сколько времени занимает устройство пола?</AccordionTrigger>
                      <AccordionContent>
                        Время работ зависит от площади и типа покрытия. В среднем: бетонный пол с топпингом - 7-10 дней на 1000 м², полимерный пол - 3-5 дней. Точные сроки рассчитываются индивидуально после осмотра объекта.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                      <AccordionTrigger>Можно ли устраивать полы зимой?</AccordionTrigger>
                      <AccordionContent>
                        Да, работы возможны круглый год при условии поддержания температурного режима +5°C и выше в помещении. Для зимних работ используются специальные добавки и тепловые пушки.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-4">
                      <AccordionTrigger>Какая подготовка основания требуется?</AccordionTrigger>
                      <AccordionContent>
                        Основание должно быть ровным, прочным и сухим. Мы проводим шлифовку, устраняем дефекты, при необходимости выполняем выравнивающую стяжку. Подготовка включена в стоимость работ.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardContent>
              </Card>
            </div>
          </section>
        </TabsContent>

        <TabsContent value="projects" className="mt-0">
          <section className="py-20">
            <div className="container mx-auto px-4">
              <h2 className="text-4xl font-bold mb-4 text-center">Реализованные объекты</h2>
              <p className="text-xl text-muted-foreground text-center mb-12">
                Примеры наших работ по устройству промышленных полов
              </p>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, idx) => (
                  <Card key={idx} className="overflow-hidden hover:shadow-xl transition-shadow">
                    <div className="h-64 overflow-hidden">
                      <img src={project.image} alt={project.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                      <div className="space-y-2 text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <Icon name="Maximize" size={16} />
                          <span>Площадь: {project.area}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Icon name="Layers" size={16} />
                          <span>{project.type}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Icon name="Calendar" size={16} />
                          <span>Год: {project.year}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="mt-16 bg-muted p-12 rounded-lg text-center">
                <Icon name="TrendingUp" size={48} className="mx-auto mb-4 text-accent" />
                <h3 className="text-2xl font-bold mb-4">Впечатляющая статистика</h3>
                <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                  <div>
                    <div className="text-4xl font-bold text-accent mb-2">200+</div>
                    <div className="text-muted-foreground">Объектов</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-accent mb-2">500 000+</div>
                    <div className="text-muted-foreground">м² полов</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-accent mb-2">15</div>
                    <div className="text-muted-foreground">Лет опыта</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-accent mb-2">98%</div>
                    <div className="text-muted-foreground">Довольных клиентов</div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </TabsContent>

        <TabsContent value="blog" className="mt-0">
          <section className="py-20">
            <div className="container mx-auto px-4">
              <h2 className="text-4xl font-bold mb-4 text-center">Блог и экспертные статьи</h2>
              <p className="text-xl text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
                Полезная информация о промышленных полах: технологии, советы по выбору и эксплуатации
              </p>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {articles.map((article, idx) => (
                  <Card key={idx} className="flex flex-col hover:shadow-lg transition-shadow">
                    <CardContent className="p-6 flex-1 flex flex-col">
                      <div className="inline-block bg-accent/10 text-accent px-3 py-1 rounded-full text-sm font-medium mb-4 self-start">
                        {article.category}
                      </div>
                      <h3 className="text-xl font-bold mb-3">{article.title}</h3>
                      <p className="text-muted-foreground mb-4 flex-1">{article.excerpt}</p>
                      <div className="flex items-center justify-between pt-4 border-t">
                        <span className="text-sm text-muted-foreground">{article.date}</span>
                        <Button variant="ghost" size="sm">
                          Читать
                          <Icon name="ArrowRight" size={16} className="ml-2" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="mt-12 text-center">
                <Button variant="outline" size="lg">
                  Показать больше статей
                  <Icon name="ChevronDown" size={20} className="ml-2" />
                </Button>
              </div>
            </div>
          </section>
        </TabsContent>

        <TabsContent value="contacts" className="mt-0">
          <section className="py-20">
            <div className="container mx-auto px-4">
              <h2 className="text-4xl font-bold mb-12 text-center">Контакты</h2>
              
              <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                <div>
                  <h3 className="text-2xl font-bold mb-6">Свяжитесь с нами</h3>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-accent text-accent-foreground p-3 rounded-lg">
                        <Icon name="Phone" size={24} />
                      </div>
                      <div>
                        <div className="font-semibold mb-1">Телефон</div>
                        <a href="tel:+74951234567" className="text-lg text-accent hover:underline">+7 (495) 123-45-67</a>
                        <div className="text-sm text-muted-foreground">Пн-Пт: 9:00 - 18:00</div>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="bg-accent text-accent-foreground p-3 rounded-lg">
                        <Icon name="Mail" size={24} />
                      </div>
                      <div>
                        <div className="font-semibold mb-1">Email</div>
                        <a href="mailto:info@prompol.ru" className="text-lg text-accent hover:underline">info@prompol.ru</a>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="bg-accent text-accent-foreground p-3 rounded-lg">
                        <Icon name="MapPin" size={24} />
                      </div>
                      <div>
                        <div className="font-semibold mb-1">Офис</div>
                        <div className="text-muted-foreground">г. Москва, ул. Промышленная, д. 25</div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 pt-8 border-t">
                    <h4 className="font-bold mb-4">Работаем по всей России</h4>
                    <p className="text-muted-foreground">
                      Выполняем проекты в Москве, Московской области и регионах РФ. Выезд специалиста на объект для замеров и консультации - бесплатно.
                    </p>
                  </div>
                </div>

                <Card>
                  <CardContent className="p-8">
                    <h3 className="text-xl font-bold mb-6">Заказать бесплатную консультацию</h3>
                    <form className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">Ваше имя</label>
                        <input type="text" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent" placeholder="Иван Иванов" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Телефон</label>
                        <input type="tel" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent" placeholder="+7 (___) ___-__-__" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Email</label>
                        <input type="email" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent" placeholder="example@mail.ru" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Площадь объекта (м²)</label>
                        <input type="number" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent" placeholder="1000" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Комментарий</label>
                        <textarea rows={3} className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent" placeholder="Опишите ваш проект..."></textarea>
                      </div>
                      <Button className="w-full" size="lg">
                        <Icon name="Send" size={18} className="mr-2" />
                        Отправить заявку
                      </Button>
                      <p className="text-xs text-muted-foreground text-center">
                        Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                      </p>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>
        </TabsContent>
      </Tabs>

      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Building2" size={28} />
                <span className="text-xl font-bold">ПромПол Эксперт</span>
              </div>
              <p className="text-sm opacity-90">Профессиональное устройство промышленных полов с 2009 года</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Услуги</h4>
              <ul className="space-y-2 text-sm opacity-90">
                <li>Бетонные полы</li>
                <li>Полимерные покрытия</li>
                <li>Полированные полы</li>
                <li>Окрасочные полы</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Компания</h4>
              <ul className="space-y-2 text-sm opacity-90">
                <li>О нас</li>
                <li>Объекты</li>
                <li>Блог</li>
                <li>Контакты</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Контакты</h4>
              <ul className="space-y-2 text-sm opacity-90">
                <li>+7 (495) 123-45-67</li>
                <li>info@prompol.ru</li>
                <li>г. Москва</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/20 pt-8 text-center text-sm opacity-90">
            <p>© 2024 ПромПол Эксперт. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
