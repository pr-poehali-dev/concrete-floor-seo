import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';

const ServicePaint = () => {
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
              <Link to="/" className="hover:text-accent transition-colors">Главная</Link>
              <Link to="/services" className="hover:text-accent transition-colors">Услуги</Link>
              <Link to="/portfolio" className="hover:text-accent transition-colors">Портфолио</Link>
              <Link to="/blog" className="hover:text-accent transition-colors">Блог</Link>
              <Link to="/contacts" className="hover:text-accent transition-colors">Контакты</Link>
            </nav>
            <Button variant="secondary" className="hidden md:block">
              <Icon name="Phone" size={18} className="mr-2" />
              +7 (495) 123-45-67
            </Button>
          </div>
        </div>
      </header>

      <section className="relative h-[400px] bg-cover bg-center" style={{ backgroundImage: `url(https://cdn.poehali.dev/projects/f33c8c52-2095-4cbd-8b07-e4abdea0a59d/files/3c81b7ad-cc83-4089-aa31-9f80be94d6fc.jpg)` }}>
        <div className="absolute inset-0 bg-primary/80" />
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Окрасочные бетонные полы</h1>
          <p className="text-xl max-w-3xl">Экономичное решение для защиты бетона от износа и пыления</p>
        </div>
      </section>

      <section className="py-16 container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-6">Окрасочные полы — доступная защита бетона</h2>
            <p className="text-lg mb-4">
              Окрасочные бетонные полы — это один из самых экономичных способов защиты бетонной поверхности. Специальные эпоксидные или полиуретановые эмали создают прочную пленку, которая предотвращает пыление, защищает от влаги и механических повреждений.
            </p>
            <p className="text-lg mb-6">
              Такое решение идеально подходит для помещений с умеренными нагрузками: небольших складов, подсобных помещений, мастерских, гаражей. Окрасочные полы быстро монтируются и не требуют длительной паузы в эксплуатации помещения.
            </p>
            <div className="bg-accent/10 p-6 rounded-lg">
              <div className="flex items-center gap-3 mb-3">
                <Icon name="Clock" size={28} className="text-accent" />
                <h3 className="text-xl font-bold">Срок монтажа</h3>
              </div>
              <p className="text-2xl font-bold text-accent">1-2 дня</p>
              <p className="text-muted-foreground mt-2">минимальное время простоя объекта</p>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-6">Преимущества окрасочных полов</h3>
            <div className="space-y-4">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-accent text-accent-foreground p-3 rounded-full">
                      <Icon name="Wallet" size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold mb-2">Доступная цена</h4>
                      <p className="text-muted-foreground">Самый экономичный вариант защиты бетона на рынке</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-accent text-accent-foreground p-3 rounded-full">
                      <Icon name="Zap" size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold mb-2">Быстрый монтаж</h4>
                      <p className="text-muted-foreground">Готовность к эксплуатации через 24-48 часов после нанесения</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-accent text-accent-foreground p-3 rounded-full">
                      <Icon name="Sparkles" size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold mb-2">Беспыльность</h4>
                      <p className="text-muted-foreground">Полностью устраняет пыление бетона</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-accent text-accent-foreground p-3 rounded-full">
                      <Icon name="Palette" size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold mb-2">Широкая цветовая гамма</h4>
                      <p className="text-muted-foreground">Любой цвет по каталогу RAL для зонирования</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        <div className="bg-muted p-8 rounded-lg mb-16">
          <h3 className="text-2xl font-bold mb-6">Технология окраски бетонного пола</h3>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-background p-6 rounded-lg">
              <div className="bg-accent text-accent-foreground w-12 h-12 rounded-full flex items-center justify-center mb-4 font-bold text-xl">1</div>
              <h4 className="font-bold mb-2">Подготовка</h4>
              <p className="text-muted-foreground">Очистка и обеспыливание бетонной поверхности</p>
            </div>
            <div className="bg-background p-6 rounded-lg">
              <div className="bg-accent text-accent-foreground w-12 h-12 rounded-full flex items-center justify-center mb-4 font-bold text-xl">2</div>
              <h4 className="font-bold mb-2">Грунтование</h4>
              <p className="text-muted-foreground">Нанесение проникающего грунта для адгезии</p>
            </div>
            <div className="bg-background p-6 rounded-lg">
              <div className="bg-accent text-accent-foreground w-12 h-12 rounded-full flex items-center justify-center mb-4 font-bold text-xl">3</div>
              <h4 className="font-bold mb-2">Окраска</h4>
              <p className="text-muted-foreground">Нанесение эмали в 2-3 слоя валиком или распылением</p>
            </div>
            <div className="bg-background p-6 rounded-lg">
              <div className="bg-accent text-accent-foreground w-12 h-12 rounded-full flex items-center justify-center mb-4 font-bold text-xl">4</div>
              <h4 className="font-bold mb-2">Высыхание</h4>
              <p className="text-muted-foreground">Полимеризация покрытия 24-48 часов</p>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-6 text-center">Типы окрасочных покрытий</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="pt-6">
                <h4 className="font-bold text-xl mb-3">Эпоксидные эмали</h4>
                <p className="mb-4 text-muted-foreground">Высокая адгезия и химическая стойкость. Подходят для влажных помещений и производств.</p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={18} className="text-accent" />
                    <span className="text-sm">Влагостойкость</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={18} className="text-accent" />
                    <span className="text-sm">Химическая защита</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={18} className="text-accent" />
                    <span className="text-sm">Долговечность 5-7 лет</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <h4 className="font-bold text-xl mb-3">Полиуретановые эмали</h4>
                <p className="mb-4 text-muted-foreground">Эластичные, устойчивы к истиранию. Идеальны для помещений с температурными перепадами.</p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={18} className="text-accent" />
                    <span className="text-sm">Эластичность</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={18} className="text-accent" />
                    <span className="text-sm">Износостойкость</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={18} className="text-accent" />
                    <span className="text-sm">Морозостойкость</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <h4 className="font-bold text-xl mb-3">Акриловые эмали</h4>
                <p className="mb-4 text-muted-foreground">Бюджетный вариант для сухих помещений с малыми нагрузками. Быстросохнущие.</p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={18} className="text-accent" />
                    <span className="text-sm">Низкая цена</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={18} className="text-accent" />
                    <span className="text-sm">Быстрое высыхание</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={18} className="text-accent" />
                    <span className="text-sm">Паропроницаемость</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="text-2xl font-bold mb-6">Где применяются окрасочные полы</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Icon name="CheckCircle2" size={24} className="text-accent mt-1" />
                <span className="text-lg">Небольшие склады и кладовые</span>
              </li>
              <li className="flex items-start gap-3">
                <Icon name="CheckCircle2" size={24} className="text-accent mt-1" />
                <span className="text-lg">Мастерские и гаражи</span>
              </li>
              <li className="flex items-start gap-3">
                <Icon name="CheckCircle2" size={24} className="text-accent mt-1" />
                <span className="text-lg">Подсобные помещения</span>
              </li>
              <li className="flex items-start gap-3">
                <Icon name="CheckCircle2" size={24} className="text-accent mt-1" />
                <span className="text-lg">Подвалы и технические этажи</span>
              </li>
              <li className="flex items-start gap-3">
                <Icon name="CheckCircle2" size={24} className="text-accent mt-1" />
                <span className="text-lg">Производственные участки с малыми нагрузками</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-6">Стоимость работ</h3>
            <Card className="border-2 border-accent">
              <CardContent className="pt-6">
                <div className="text-center mb-6">
                  <p className="text-5xl font-bold text-accent mb-2">от 450 ₽</p>
                  <p className="text-xl text-muted-foreground">за м²</p>
                </div>
                <div className="space-y-2 mb-6">
                  <p className="flex justify-between"><span>Подготовка поверхности</span><span className="font-semibold">включено</span></p>
                  <p className="flex justify-between"><span>Грунтование</span><span className="font-semibold">включено</span></p>
                  <p className="flex justify-between"><span>Окраска в 2 слоя</span><span className="font-semibold">включено</span></p>
                  <p className="flex justify-between"><span>Материалы</span><span className="font-semibold">включено</span></p>
                </div>
                <Button className="w-full" size="lg">
                  <Icon name="Calculator" size={20} className="mr-2" />
                  Рассчитать точную стоимость
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="bg-accent/10 p-8 rounded-lg text-center">
          <h3 className="text-2xl font-bold mb-4">Закажите окраску пола прямо сейчас</h3>
          <p className="text-lg mb-6 max-w-2xl mx-auto">Выполним работы за 1-2 дня без остановки работы вашего предприятия</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-accent hover:bg-accent/90">
              <Icon name="Phone" size={20} className="mr-2" />
              Заказать окраску
            </Button>
            <Link to="/contacts">
              <Button size="lg" variant="outline">
                <Icon name="Mail" size={20} className="mr-2" />
                Получить расчет
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4 text-center">
          <p className="mb-2">© 2024 ПромПол Эксперт. Все права защищены.</p>
          <p className="text-sm opacity-80">Профессиональное устройство промышленных и коммерческих полов</p>
        </div>
      </footer>
    </div>
  );
};

export default ServicePaint;
