import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';

const ServicePolymer = () => {
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

      <section className="relative h-[400px] bg-cover bg-center" style={{ backgroundImage: `url(https://cdn.poehali.dev/projects/f33c8c52-2095-4cbd-8b07-e4abdea0a59d/files/df4ccab9-f996-447a-a46d-66f3cd6cc7c7.jpg)` }}>
        <div className="absolute inset-0 bg-primary/80" />
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Полимерные наливные полы</h1>
          <p className="text-xl max-w-3xl">Химически стойкие бесшовные покрытия для пищевой и фармацевтической промышленности</p>
        </div>
      </section>

      <section className="py-16 container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-6">Полимерные полы — максимальная защита и гигиена</h2>
            <p className="text-lg mb-4">
              Полимерные наливные полы — это современное высокотехнологичное покрытие на основе эпоксидных или полиуретановых смол. Они создают абсолютно гладкую бесшовную поверхность, устойчивую к химическим веществам, ударным нагрузкам и истиранию.
            </p>
            <p className="text-lg mb-6">
              Такие полы незаменимы там, где требуются строгие санитарные нормы: пищевые производства, фармацевтические цеха, лаборатории, медицинские учреждения. Полимерное покрытие легко моется, не впитывает загрязнения и соответствует всем требованиям СанПиН.
            </p>
            <div className="bg-accent/10 p-6 rounded-lg">
              <div className="flex items-center gap-3 mb-3">
                <Icon name="Shield" size={28} className="text-accent" />
                <h3 className="text-xl font-bold">Химическая стойкость</h3>
              </div>
              <p className="text-2xl font-bold text-accent">pH 1-13</p>
              <p className="text-muted-foreground mt-2">устойчивость к кислотам и щелочам</p>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-6">Преимущества полимерных полов</h3>
            <div className="space-y-4">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-accent text-accent-foreground p-3 rounded-full">
                      <Icon name="Droplets" size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold mb-2">Бесшовность</h4>
                      <p className="text-muted-foreground">Монолитная поверхность без стыков и щелей, где могут скапливаться бактерии</p>
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
                      <h4 className="font-bold mb-2">Антистатичность</h4>
                      <p className="text-muted-foreground">Защита оборудования от статического электричества</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-accent text-accent-foreground p-3 rounded-full">
                      <Icon name="Flask" size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold mb-2">Химическая стойкость</h4>
                      <p className="text-muted-foreground">Выдерживает воздействие кислот, масел, растворителей</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-accent text-accent-foreground p-3 rounded-full">
                      <Icon name="Thermometer" size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold mb-2">Температурная стойкость</h4>
                      <p className="text-muted-foreground">Эксплуатация от -40°C до +150°C в зависимости от типа</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        <div className="bg-muted p-8 rounded-lg mb-16">
          <h3 className="text-2xl font-bold mb-6">Этапы устройства полимерного пола</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-background p-6 rounded-lg">
              <div className="bg-accent text-accent-foreground w-12 h-12 rounded-full flex items-center justify-center mb-4 font-bold text-xl">1</div>
              <h4 className="font-bold mb-2">Подготовка основания</h4>
              <p className="text-muted-foreground">Шлифовка, обеспыливание, ремонт дефектов бетона</p>
            </div>
            <div className="bg-background p-6 rounded-lg">
              <div className="bg-accent text-accent-foreground w-12 h-12 rounded-full flex items-center justify-center mb-4 font-bold text-xl">2</div>
              <h4 className="font-bold mb-2">Грунтование</h4>
              <p className="text-muted-foreground">Нанесение эпоксидного грунта для адгезии</p>
            </div>
            <div className="bg-background p-6 rounded-lg">
              <div className="bg-accent text-accent-foreground w-12 h-12 rounded-full flex items-center justify-center mb-4 font-bold text-xl">3</div>
              <h4 className="font-bold mb-2">Базовый слой</h4>
              <p className="text-muted-foreground">Устройство основного полимерного слоя 2-4 мм</p>
            </div>
            <div className="bg-background p-6 rounded-lg">
              <div className="bg-accent text-accent-foreground w-12 h-12 rounded-full flex items-center justify-center mb-4 font-bold text-xl">4</div>
              <h4 className="font-bold mb-2">Финишное покрытие</h4>
              <p className="text-muted-foreground">Нанесение защитного лака для стойкости</p>
            </div>
            <div className="bg-background p-6 rounded-lg">
              <div className="bg-accent text-accent-foreground w-12 h-12 rounded-full flex items-center justify-center mb-4 font-bold text-xl">5</div>
              <h4 className="font-bold mb-2">Полимеризация</h4>
              <p className="text-muted-foreground">Набор прочности 3-7 дней при +20°C</p>
            </div>
            <div className="bg-background p-6 rounded-lg">
              <div className="bg-accent text-accent-foreground w-12 h-12 rounded-full flex items-center justify-center mb-4 font-bold text-xl">6</div>
              <h4 className="font-bold mb-2">Сдача объекта</h4>
              <p className="text-muted-foreground">Контроль качества и ввод в эксплуатацию</p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="text-2xl font-bold mb-6">Где применяются полимерные полы</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Icon name="CheckCircle2" size={24} className="text-accent mt-1" />
                <span className="text-lg">Пищевые производства и цеха</span>
              </li>
              <li className="flex items-start gap-3">
                <Icon name="CheckCircle2" size={24} className="text-accent mt-1" />
                <span className="text-lg">Фармацевтические предприятия</span>
              </li>
              <li className="flex items-start gap-3">
                <Icon name="CheckCircle2" size={24} className="text-accent mt-1" />
                <span className="text-lg">Химические заводы и лаборатории</span>
              </li>
              <li className="flex items-start gap-3">
                <Icon name="CheckCircle2" size={24} className="text-accent mt-1" />
                <span className="text-lg">Медицинские учреждения</span>
              </li>
              <li className="flex items-start gap-3">
                <Icon name="CheckCircle2" size={24} className="text-accent mt-1" />
                <span className="text-lg">Холодильные камеры</span>
              </li>
              <li className="flex items-start gap-3">
                <Icon name="CheckCircle2" size={24} className="text-accent mt-1" />
                <span className="text-lg">Электронное производство (ESD-полы)</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-6">Стоимость работ</h3>
            <Card className="border-2 border-accent">
              <CardContent className="pt-6">
                <div className="text-center mb-6">
                  <p className="text-5xl font-bold text-accent mb-2">от 1500 ₽</p>
                  <p className="text-xl text-muted-foreground">за м²</p>
                </div>
                <div className="space-y-2 mb-6">
                  <p className="flex justify-between"><span>Подготовка основания</span><span className="font-semibold">включено</span></p>
                  <p className="flex justify-between"><span>Эпоксидный грунт</span><span className="font-semibold">включено</span></p>
                  <p className="flex justify-between"><span>Полимерное покрытие 3 мм</span><span className="font-semibold">включено</span></p>
                  <p className="flex justify-between"><span>Финишный лак</span><span className="font-semibold">включено</span></p>
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
          <h3 className="text-2xl font-bold mb-4">Нужна консультация по выбору типа полимера?</h3>
          <p className="text-lg mb-6 max-w-2xl mx-auto">Поможем подобрать оптимальное решение с учетом специфики вашего производства</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-accent hover:bg-accent/90">
              <Icon name="Phone" size={20} className="mr-2" />
              Связаться со специалистом
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

export default ServicePolymer;
