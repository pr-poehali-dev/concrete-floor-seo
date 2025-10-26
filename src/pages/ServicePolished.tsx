import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';

const ServicePolished = () => {
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

      <section className="relative h-[400px] bg-cover bg-center" style={{ backgroundImage: `url(https://cdn.poehali.dev/projects/f33c8c52-2095-4cbd-8b07-e4abdea0a59d/files/381d7936-80bb-45aa-9757-2b6c7c9d5452.jpg)` }}>
        <div className="absolute inset-0 bg-primary/80" />
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Полированные бетонные полы</h1>
          <p className="text-xl max-w-3xl">Эстетичное решение с зеркальным блеском для торговых и офисных пространств</p>
        </div>
      </section>

      <section className="py-16 container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-6">Полированный бетон — тренд современного дизайна</h2>
            <p className="text-lg mb-4">
              Полированные бетонные полы — это инновационная технология обработки бетонной поверхности, в результате которой получается идеально гладкое покрытие с глянцевым блеском. Процесс включает многоступенчатую шлифовку специальными алмазными падами с постепенным увеличением зернистости.
            </p>
            <p className="text-lg mb-6">
              Такие полы сочетают в себе промышленную прочность и современную эстетику. Полированный бетон идеально подходит для шоу-румов, торговых центров, ресторанов, офисов в стиле лофт и современных жилых пространств.
            </p>
            <div className="bg-accent/10 p-6 rounded-lg">
              <div className="flex items-center gap-3 mb-3">
                <Icon name="Sparkles" size={28} className="text-accent" />
                <h3 className="text-xl font-bold">Класс блеска</h3>
              </div>
              <p className="text-2xl font-bold text-accent">до 90 единиц</p>
              <p className="text-muted-foreground mt-2">эффект зеркального отражения</p>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-6">Преимущества полированного бетона</h3>
            <div className="space-y-4">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-accent text-accent-foreground p-3 rounded-full">
                      <Icon name="Eye" size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold mb-2">Эстетика и дизайн</h4>
                      <p className="text-muted-foreground">Современный вид с зеркальным блеском, подчеркивающий архитектуру пространства</p>
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
                      <h4 className="font-bold mb-2">Легкая уборка</h4>
                      <p className="text-muted-foreground">Гладкая поверхность не накапливает грязь и легко моется обычной водой</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-accent text-accent-foreground p-3 rounded-full">
                      <Icon name="Sun" size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold mb-2">Светоотражение</h4>
                      <p className="text-muted-foreground">Повышает освещенность помещения на 20-30%, экономя электроэнергию</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-accent text-accent-foreground p-3 rounded-full">
                      <Icon name="Leaf" size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold mb-2">Экологичность</h4>
                      <p className="text-muted-foreground">Не требует дополнительных покрытий, химически нейтрален</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        <div className="bg-muted p-8 rounded-lg mb-16">
          <h3 className="text-2xl font-bold mb-6">Технология полировки бетона</h3>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-background p-6 rounded-lg">
              <div className="bg-accent text-accent-foreground w-12 h-12 rounded-full flex items-center justify-center mb-4 font-bold text-xl">1</div>
              <h4 className="font-bold mb-2">Подготовка</h4>
              <p className="text-muted-foreground">Оценка состояния бетона, ремонт трещин и выбоин</p>
            </div>
            <div className="bg-background p-6 rounded-lg">
              <div className="bg-accent text-accent-foreground w-12 h-12 rounded-full flex items-center justify-center mb-4 font-bold text-xl">2</div>
              <h4 className="font-bold mb-2">Грубая шлифовка</h4>
              <p className="text-muted-foreground">Снятие верхнего слоя алмазными фрезами 30-50 грит</p>
            </div>
            <div className="bg-background p-6 rounded-lg">
              <div className="bg-accent text-accent-foreground w-12 h-12 rounded-full flex items-center justify-center mb-4 font-bold text-xl">3</div>
              <h4 className="font-bold mb-2">Уплотнение</h4>
              <p className="text-muted-foreground">Нанесение химических уплотнителей для упрочнения</p>
            </div>
            <div className="bg-background p-6 rounded-lg">
              <div className="bg-accent text-accent-foreground w-12 h-12 rounded-full flex items-center justify-center mb-4 font-bold text-xl">4</div>
              <h4 className="font-bold mb-2">Финишная полировка</h4>
              <p className="text-muted-foreground">Полировка падами от 100 до 3000 грит до блеска</p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="text-2xl font-bold mb-6">Области применения</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Icon name="CheckCircle2" size={24} className="text-accent mt-1" />
                <span className="text-lg">Торговые центры и бутики</span>
              </li>
              <li className="flex items-start gap-3">
                <Icon name="CheckCircle2" size={24} className="text-accent mt-1" />
                <span className="text-lg">Шоу-румы и автосалоны</span>
              </li>
              <li className="flex items-start gap-3">
                <Icon name="CheckCircle2" size={24} className="text-accent mt-1" />
                <span className="text-lg">Рестораны и кафе</span>
              </li>
              <li className="flex items-start gap-3">
                <Icon name="CheckCircle2" size={24} className="text-accent mt-1" />
                <span className="text-lg">Офисные помещения</span>
              </li>
              <li className="flex items-start gap-3">
                <Icon name="CheckCircle2" size={24} className="text-accent mt-1" />
                <span className="text-lg">Современные лофты и квартиры</span>
              </li>
              <li className="flex items-start gap-3">
                <Icon name="CheckCircle2" size={24} className="text-accent mt-1" />
                <span className="text-lg">Музеи и галереи</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-6">Стоимость работ</h3>
            <Card className="border-2 border-accent">
              <CardContent className="pt-6">
                <div className="text-center mb-6">
                  <p className="text-5xl font-bold text-accent mb-2">от 1200 ₽</p>
                  <p className="text-xl text-muted-foreground">за м²</p>
                </div>
                <div className="space-y-2 mb-6">
                  <p className="flex justify-between"><span>Подготовка основания</span><span className="font-semibold">включено</span></p>
                  <p className="flex justify-between"><span>Многоступенчатая шлифовка</span><span className="font-semibold">включено</span></p>
                  <p className="flex justify-between"><span>Химические уплотнители</span><span className="font-semibold">включено</span></p>
                  <p className="flex justify-between"><span>Полировка до блеска</span><span className="font-semibold">включено</span></p>
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
          <h3 className="text-2xl font-bold mb-4">Закажите бесплатный выезд специалиста</h3>
          <p className="text-lg mb-6 max-w-2xl mx-auto">Мы оценим состояние вашего бетона и подберем оптимальный вариант полировки</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-accent hover:bg-accent/90">
              <Icon name="Phone" size={20} className="mr-2" />
              Вызвать замерщика
            </Button>
            <Link to="/contacts">
              <Button size="lg" variant="outline">
                <Icon name="Mail" size={20} className="mr-2" />
                Оставить заявку
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

export default ServicePolished;
