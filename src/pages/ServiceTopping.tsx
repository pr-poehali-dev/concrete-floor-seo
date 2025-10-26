import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';

const ServiceTopping = () => {
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Бетонный пол с топпингом</h1>
          <p className="text-xl max-w-3xl">Упрочненный верхний слой бетонного пола для складов и производств с высокими нагрузками</p>
        </div>
      </section>

      <section className="py-16 container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-6">Что такое топпинг для бетонного пола?</h2>
            <p className="text-lg mb-4">
              Топпинг — это специальная сухая смесь на основе цемента с добавлением корунда, кварца или металлизированных наполнителей. Смесь наносится на свежеуложенный бетон и втирается в поверхность, создавая сверхпрочный защитный слой.
            </p>
            <p className="text-lg mb-6">
              Технология топпинга увеличивает износостойкость бетонного пола в 3-5 раз, делает его беспыльным и устойчивым к ударным нагрузкам. Идеальное решение для складов, логистических центров, производственных цехов и паркингов.
            </p>
            <div className="bg-accent/10 p-6 rounded-lg">
              <div className="flex items-center gap-3 mb-3">
                <Icon name="TrendingUp" size={28} className="text-accent" />
                <h3 className="text-xl font-bold">Срок службы</h3>
              </div>
              <p className="text-2xl font-bold text-accent">20-25 лет</p>
              <p className="text-muted-foreground mt-2">при правильной эксплуатации</p>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-6">Преимущества топпинговых полов</h3>
            <div className="space-y-4">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-accent text-accent-foreground p-3 rounded-full">
                      <Icon name="Shield" size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold mb-2">Высокая износостойкость</h4>
                      <p className="text-muted-foreground">Выдерживает движение погрузчиков и тяжелой техники весом до 15 тонн</p>
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
                      <p className="text-muted-foreground">Полностью исключает пыление бетона, сохраняя чистоту помещения</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-accent text-accent-foreground p-3 rounded-full">
                      <Icon name="Droplet" size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold mb-2">Влагостойкость</h4>
                      <p className="text-muted-foreground">Устойчив к воздействию воды и технических жидкостей</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-accent text-accent-foreground p-3 rounded-full">
                      <Icon name="Coins" size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold mb-2">Экономичность</h4>
                      <p className="text-muted-foreground">Минимальные затраты на эксплуатацию и обслуживание</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        <div className="bg-muted p-8 rounded-lg mb-16">
          <h3 className="text-2xl font-bold mb-6">Этапы устройства пола с топпингом</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-background p-6 rounded-lg">
              <div className="bg-accent text-accent-foreground w-12 h-12 rounded-full flex items-center justify-center mb-4 font-bold text-xl">1</div>
              <h4 className="font-bold mb-2">Подготовка основания</h4>
              <p className="text-muted-foreground">Уплотнение грунта, устройство щебеночной подушки и гидроизоляции</p>
            </div>
            <div className="bg-background p-6 rounded-lg">
              <div className="bg-accent text-accent-foreground w-12 h-12 rounded-full flex items-center justify-center mb-4 font-bold text-xl">2</div>
              <h4 className="font-bold mb-2">Армирование и бетонирование</h4>
              <p className="text-muted-foreground">Укладка арматурной сетки и заливка бетона марки М300-М350</p>
            </div>
            <div className="bg-background p-6 rounded-lg">
              <div className="bg-accent text-accent-foreground w-12 h-12 rounded-full flex items-center justify-center mb-4 font-bold text-xl">3</div>
              <h4 className="font-bold mb-2">Нанесение топпинга</h4>
              <p className="text-muted-foreground">Втирание сухой смеси в свежий бетон в 2-3 прохода</p>
            </div>
            <div className="bg-background p-6 rounded-lg">
              <div className="bg-accent text-accent-foreground w-12 h-12 rounded-full flex items-center justify-center mb-4 font-bold text-xl">4</div>
              <h4 className="font-bold mb-2">Затирка поверхности</h4>
              <p className="text-muted-foreground">Финишная затирка специальными машинами до идеально гладкой поверхности</p>
            </div>
            <div className="bg-background p-6 rounded-lg">
              <div className="bg-accent text-accent-foreground w-12 h-12 rounded-full flex items-center justify-center mb-4 font-bold text-xl">5</div>
              <h4 className="font-bold mb-2">Нарезка швов</h4>
              <p className="text-muted-foreground">Устройство деформационных швов для предотвращения трещин</p>
            </div>
            <div className="bg-background p-6 rounded-lg">
              <div className="bg-accent text-accent-foreground w-12 h-12 rounded-full flex items-center justify-center mb-4 font-bold text-xl">6</div>
              <h4 className="font-bold mb-2">Уход за бетоном</h4>
              <p className="text-muted-foreground">Нанесение защитных составов и контроль набора прочности</p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="text-2xl font-bold mb-6">Где применяются полы с топпингом</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Icon name="CheckCircle2" size={24} className="text-accent mt-1" />
                <span className="text-lg">Складские и логистические центры</span>
              </li>
              <li className="flex items-start gap-3">
                <Icon name="CheckCircle2" size={24} className="text-accent mt-1" />
                <span className="text-lg">Производственные цеха и заводы</span>
              </li>
              <li className="flex items-start gap-3">
                <Icon name="CheckCircle2" size={24} className="text-accent mt-1" />
                <span className="text-lg">Автосервисы и автомойки</span>
              </li>
              <li className="flex items-start gap-3">
                <Icon name="CheckCircle2" size={24} className="text-accent mt-1" />
                <span className="text-lg">Паркинги и гаражные комплексы</span>
              </li>
              <li className="flex items-start gap-3">
                <Icon name="CheckCircle2" size={24} className="text-accent mt-1" />
                <span className="text-lg">Торговые центры и гипермаркеты</span>
              </li>
              <li className="flex items-start gap-3">
                <Icon name="CheckCircle2" size={24} className="text-accent mt-1" />
                <span className="text-lg">Спортивные сооружения</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-6">Стоимость работ</h3>
            <Card className="border-2 border-accent">
              <CardContent className="pt-6">
                <div className="text-center mb-6">
                  <p className="text-5xl font-bold text-accent mb-2">от 850 ₽</p>
                  <p className="text-xl text-muted-foreground">за м²</p>
                </div>
                <div className="space-y-2 mb-6">
                  <p className="flex justify-between"><span>Подготовка основания</span><span className="font-semibold">включено</span></p>
                  <p className="flex justify-between"><span>Бетонирование М300</span><span className="font-semibold">включено</span></p>
                  <p className="flex justify-between"><span>Топпинг Mapei</span><span className="font-semibold">включено</span></p>
                  <p className="flex justify-between"><span>Нарезка швов</span><span className="font-semibold">включено</span></p>
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
          <h3 className="text-2xl font-bold mb-4">Получите бесплатную консультацию</h3>
          <p className="text-lg mb-6 max-w-2xl mx-auto">Наши специалисты помогут выбрать оптимальное решение для вашего объекта и рассчитают точную стоимость работ</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-accent hover:bg-accent/90">
              <Icon name="Phone" size={20} className="mr-2" />
              Позвонить сейчас
            </Button>
            <Link to="/contacts">
              <Button size="lg" variant="outline">
                <Icon name="Mail" size={20} className="mr-2" />
                Написать нам
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

export default ServiceTopping;
