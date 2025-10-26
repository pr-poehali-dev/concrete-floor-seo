import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';

const ArticleWarehouse = () => {
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

      <article className="py-16 container mx-auto px-4 max-w-4xl">
        <div className="mb-8">
          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
            <span className="flex items-center gap-1">
              <Icon name="Calendar" size={16} />
              15 октября 2024
            </span>
            <span className="flex items-center gap-1">
              <Icon name="Tag" size={16} />
              Выбор покрытия
            </span>
            <span className="flex items-center gap-1">
              <Icon name="Clock" size={16} />
              8 мин чтения
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Как выбрать промышленный пол для склада: полное руководство 2024</h1>
          <p className="text-xl text-muted-foreground">Складские помещения требуют особого подхода к выбору напольного покрытия. Разбираем ключевые факторы и даем практические рекомендации.</p>
        </div>

        <img 
          src="https://cdn.poehali.dev/projects/f33c8c52-2095-4cbd-8b07-e4abdea0a59d/files/3c81b7ad-cc83-4089-aa31-9f80be94d6fc.jpg" 
          alt="Промышленный пол для склада" 
          className="w-full h-96 object-cover rounded-lg mb-12"
        />

        <div className="prose prose-lg max-w-none">
          <h2 className="text-3xl font-bold mt-12 mb-6">Зачем складу специальное напольное покрытие?</h2>
          <p className="mb-6">
            Обычный бетон без дополнительной обработки быстро разрушается под нагрузкой складской техники. Пылящий, покрытый трещинами пол создает проблемы: загрязняет товар, выводит из строя оборудование, повышает травмоопасность. Профессиональное промышленное покрытие решает эти проблемы на 15-25 лет.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6">Ключевые факторы выбора пола для склада</h2>

          <h3 className="text-2xl font-bold mt-8 mb-4">1. Тип складируемой продукции</h3>
          <Card className="mb-6">
            <CardContent className="pt-6">
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Icon name="Package" size={20} className="text-accent mt-1" />
                  <div>
                    <strong>Пищевые продукты:</strong> требуют полимерных полов с гигиеническим сертификатом, устойчивых к мойке и дезинфекции
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Icon name="Droplet" size={20} className="text-accent mt-1" />
                  <div>
                    <strong>Химические вещества:</strong> нужны эпоксидные покрытия с химической стойкостью pH 1-13
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Icon name="Box" size={20} className="text-accent mt-1" />
                  <div>
                    <strong>Тяжелые грузы:</strong> подойдет бетон с топпингом, выдерживающий нагрузку до 15 тонн на точку
                  </div>
                </li>
              </ul>
            </CardContent>
          </Card>

          <h3 className="text-2xl font-bold mt-8 mb-4">2. Интенсивность движения техники</h3>
          <p className="mb-6">
            Разные типы полов выдерживают разную нагрузку. Оцените количество погрузчиков, штабелеров, роботов на вашем складе:
          </p>
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <Card>
              <CardContent className="pt-6">
                <h4 className="font-bold mb-3 flex items-center gap-2">
                  <Icon name="Gauge" size={20} className="text-accent" />
                  Низкая интенсивность
                </h4>
                <p className="text-sm mb-3">До 5 проходов техники в час</p>
                <p className="text-muted-foreground">Подходят: окрасочные полы, тонкослойные полимерные покрытия</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <h4 className="font-bold mb-3 flex items-center gap-2">
                  <Icon name="TrendingUp" size={20} className="text-accent" />
                  Высокая интенсивность
                </h4>
                <p className="text-sm mb-3">Более 20 проходов в час</p>
                <p className="text-muted-foreground">Требуются: полы с топпингом, толстослойные полимерные системы</p>
              </CardContent>
            </Card>
          </div>

          <h3 className="text-2xl font-bold mt-8 mb-4">3. Температурный режим склада</h3>
          <p className="mb-6">
            Условия эксплуатации напрямую влияют на выбор материала:
          </p>
          <ul className="space-y-3 mb-6">
            <li className="flex items-start gap-3">
              <Icon name="Sun" size={20} className="text-accent mt-1" />
              <div>
                <strong>Отапливаемые склады (+15...+25°C):</strong> любые типы покрытий
              </div>
            </li>
            <li className="flex items-start gap-3">
              <Icon name="Snowflake" size={20} className="text-accent mt-1" />
              <div>
                <strong>Холодильные камеры (-25...+5°C):</strong> полиуретановые полы с антискользящим эффектом
              </div>
            </li>
            <li className="flex items-start gap-3">
              <Icon name="Thermometer" size={20} className="text-accent mt-1" />
              <div>
                <strong>Неотапливаемые склады:</strong> морозостойкие топпинги, полиуретан-цементные системы
              </div>
            </li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">4. Бюджет проекта</h3>
          <div className="bg-muted p-6 rounded-lg mb-6">
            <h4 className="font-bold mb-4 text-lg">Сравнение стоимости покрытий</h4>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span>Окрасочные полы</span>
                <span className="font-bold text-accent">450-600 ₽/м²</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Бетон с топпингом</span>
                <span className="font-bold text-accent">850-1200 ₽/м²</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Полированный бетон</span>
                <span className="font-bold text-accent">1200-1800 ₽/м²</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Полимерные наливные полы</span>
                <span className="font-bold text-accent">1500-2500 ₽/м²</span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mt-4">*Цены указаны за м² под ключ с материалами</p>
          </div>
          <p className="mb-6">
            Важно: дешевое решение может обойтись дороже в перспективе. Окрасочный пол через 3 года потребует ремонта, а топпинг прослужит 20+ лет без вложений.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6">Рекомендации по выбору для разных типов складов</h2>

          <div className="space-y-6 mb-8">
            <Card>
              <CardContent className="pt-6">
                <h4 className="text-xl font-bold mb-3 flex items-center gap-2">
                  <Icon name="Warehouse" size={24} className="text-accent" />
                  Универсальный логистический склад
                </h4>
                <p className="mb-3">Хранение товаров в коробках, паллетах. Движение вилочных погрузчиков, штабелеров.</p>
                <p className="font-semibold text-accent">Рекомендация: бетонный пол с топпингом кварцевым или корундовым</p>
                <p className="text-sm text-muted-foreground mt-2">Срок службы 20+ лет, стоимость 850-1000 ₽/м²</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h4 className="text-xl font-bold mb-3 flex items-center gap-2">
                  <Icon name="Apple" size={24} className="text-accent" />
                  Склад пищевой продукции
                </h4>
                <p className="mb-3">Требования СанПиН, регулярная влажная уборка и дезинфекция.</p>
                <p className="font-semibold text-accent">Рекомендация: полимерный наливной пол (эпоксидный или полиуретановый)</p>
                <p className="text-sm text-muted-foreground mt-2">Гигиенический сертификат, стоимость 1500-2000 ₽/м²</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h4 className="text-xl font-bold mb-3 flex items-center gap-2">
                  <Icon name="Snowflake" size={24} className="text-accent" />
                  Холодильный склад
                </h4>
                <p className="mb-3">Температура от -25°C, перепады температур, возможна влажность.</p>
                <p className="font-semibold text-accent">Рекомендация: полиуретановый пол с антискользящим наполнителем</p>
                <p className="text-sm text-muted-foreground mt-2">Морозостойкость, безопасность, стоимость 1800-2500 ₽/м²</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h4 className="text-xl font-bold mb-3 flex items-center gap-2">
                  <Icon name="Wrench" size={24} className="text-accent" />
                  Подсобный склад, кладовая
                </h4>
                <p className="mb-3">Небольшая площадь, малые нагрузки, ограниченный бюджет.</p>
                <p className="font-semibold text-accent">Рекомендация: окрасочное покрытие эпоксидное или полиуретановое</p>
                <p className="text-sm text-muted-foreground mt-2">Экономичное решение, стоимость 450-600 ₽/м²</p>
              </CardContent>
            </Card>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">Частые ошибки при выборе пола для склада</h2>
          <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-6 rounded">
            <h4 className="font-bold mb-3 flex items-center gap-2">
              <Icon name="AlertCircle" size={20} className="text-red-500" />
              Ошибка №1: Экономия на толщине покрытия
            </h4>
            <p className="text-sm">Тонкослойное покрытие (1-2 мм) быстро истирается под нагрузкой. Для складов нужно минимум 3-4 мм для полимеров и 5-6 кг/м² топпинга.</p>
          </div>

          <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-6 rounded">
            <h4 className="font-bold mb-3 flex items-center gap-2">
              <Icon name="AlertCircle" size={20} className="text-red-500" />
              Ошибка №2: Игнорирование состояния основания
            </h4>
            <p className="text-sm">Покрытие на слабом бетоне (ниже М200) или с трещинами прослужит недолго. Обязательна оценка прочности и ремонт дефектов перед монтажом.</p>
          </div>

          <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-6 rounded">
            <h4 className="font-bold mb-3 flex items-center gap-2">
              <Icon name="AlertCircle" size={20} className="text-red-500" />
              Ошибка №3: Неправильный выбор для температурного режима
            </h4>
            <p className="text-sm">Эпоксидные полы не подходят для морозильных камер — при -25°C они становятся хрупкими. Нужны специальные полиуретановые системы.</p>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">Заключение: алгоритм выбора пола для склада</h2>
          <div className="bg-accent/10 p-6 rounded-lg mb-8">
            <ol className="space-y-3">
              <li className="flex gap-3">
                <span className="bg-accent text-accent-foreground w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">1</span>
                <span>Определите тип складируемых товаров и требования к гигиене</span>
              </li>
              <li className="flex gap-3">
                <span className="bg-accent text-accent-foreground w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">2</span>
                <span>Оцените интенсивность движения техники и максимальные нагрузки</span>
              </li>
              <li className="flex gap-3">
                <span className="bg-accent text-accent-foreground w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">3</span>
                <span>Учтите температурный режим и особые условия (влажность, химия)</span>
              </li>
              <li className="flex gap-3">
                <span className="bg-accent text-accent-foreground w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">4</span>
                <span>Рассчитайте бюджет с учетом срока службы, а не только стартовых затрат</span>
              </li>
              <li className="flex gap-3">
                <span className="bg-accent text-accent-foreground w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">5</span>
                <span>Проконсультируйтесь со специалистами для финального выбора</span>
              </li>
            </ol>
          </div>

          <p className="mb-8">
            Правильный выбор промышленного пола для склада — это инвестиция на десятилетия. Не экономьте на качестве материалов и профессиональном монтаже. Грамотно подобранное покрытие окупается за 2-3 года за счет снижения затрат на ремонт, уборку и простои.
          </p>
        </div>

        <div className="bg-accent/10 p-8 rounded-lg text-center mt-12">
          <h3 className="text-2xl font-bold mb-4">Не уверены в выборе? Получите бесплатную консультацию</h3>
          <p className="text-lg mb-6">Наши эксперты помогут подобрать оптимальное решение для вашего склада с учетом всех параметров</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-accent hover:bg-accent/90">
              <Icon name="Phone" size={20} className="mr-2" />
              Позвонить специалисту
            </Button>
            <Link to="/contacts">
              <Button size="lg" variant="outline">
                <Icon name="Calculator" size={20} className="mr-2" />
                Рассчитать стоимость
              </Button>
            </Link>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t">
          <Link to="/blog" className="inline-flex items-center gap-2 text-accent hover:underline">
            <Icon name="ArrowLeft" size={20} />
            Вернуться к списку статей
          </Link>
        </div>
      </article>

      <footer className="bg-primary text-primary-foreground py-12 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p className="mb-2">© 2024 ПромПол Эксперт. Все права защищены.</p>
          <p className="text-sm opacity-80">Профессиональное устройство промышленных и коммерческих полов</p>
        </div>
      </footer>
    </div>
  );
};

export default ArticleWarehouse;
