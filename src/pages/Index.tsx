import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  const services = [
    {
      title: "Цифровая стратегия",
      description: "Разрабатываем комплексные digital-стратегии для роста вашего бизнеса",
      icon: "Target"
    },
    {
      title: "SMM продвижение", 
      description: "Создаем вирусный контент и управляем социальными сетями",
      icon: "Share2"
    },
    {
      title: "Контекстная реклама",
      description: "Настраиваем эффективные рекламные кампании в Google и Яндекс",
      icon: "MousePointer"
    },
    {
      title: "Брендинг",
      description: "Создаем уникальную айдентику и позиционирование бренда",
      icon: "Palette"
    }
  ];

  const cases = [
    {
      title: "Рост продаж на 300%",
      client: "E-commerce проект",
      description: "Комплексное продвижение интернет-магазина",
      image: "/img/0ef29bd2-6d57-4c90-ab6d-971503be40d9.jpg",
      metrics: "+300% продаж, +150% трафик"
    },
    {
      title: "Вирусная кампания",
      client: "Fashion бренд", 
      description: "Креативная SMM-кампания с охватом 2М+",
      image: "/img/279b452c-3f11-4a26-8780-af360f690e8d.jpg",
      metrics: "2М+ охват, 50К+ взаимодействий"
    },
    {
      title: "Ребрендинг компании",
      client: "IT стартап",
      description: "Полная смена айдентики и позиционирования",
      image: "/img/d6635655-958c-4882-ac12-7dd7f3198c8d.jpg", 
      metrics: "+200% узнаваемость бренда"
    }
  ];

  const testimonials = [
    {
      name: "Алексей Петров",
      company: "TechStart",
      text: "Ребята полностью изменили наш подход к маркетингу. Результат превзошел все ожидания!",
      rating: 5
    },
    {
      name: "Мария Иванова", 
      company: "BeautySpace",
      text: "Профессиональная команда, креативные решения и отличные результаты. Рекомендую!",
      rating: 5
    },
    {
      name: "Дмитрий Сидоров",
      company: "GreenTech",
      text: "Благодаря их стратегии наш оборот вырос в 3 раза за полгода. Просто восторг!",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-purple-50 to-orange-50 font-open-sans">
      {/* Header */}
      <header className="py-6 px-4 md:px-8">
        <nav className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-2xl font-montserrat font-bold bg-gradient-to-r from-orange to-purple bg-clip-text text-transparent">
            CREATIVE AGENCY
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#about" className="hover:text-orange transition-colors">О нас</a>
            <a href="#services" className="hover:text-orange transition-colors">Услуги</a>
            <a href="#cases" className="hover:text-orange transition-colors">Кейсы</a>
            <a href="#testimonials" className="hover:text-orange transition-colors">Отзывы</a>
            <a href="#contact" className="hover:text-orange transition-colors">Контакты</a>
          </div>
          <Button className="bg-orange hover:bg-orange-dark text-white">
            Связаться
          </Button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-montserrat font-bold mb-6 animate-fade-in">
            <span className="bg-gradient-to-r from-orange via-purple to-emerald bg-clip-text text-transparent">
              Взрываем
            </span>
            <br />
            ваши продажи
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 animate-slide-up max-w-3xl mx-auto">
            Мы создаем смелые маркетинговые кампании, которые делают бренды незабываемыми и прибыльными
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-bounce-in">
            <Button size="lg" className="bg-orange hover:bg-orange-dark text-white text-lg px-8 py-4">
              <Icon name="Rocket" size={24} className="mr-2" />
              Запустить проект
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-purple text-purple hover:bg-purple hover:text-white text-lg px-8 py-4">
              <Icon name="Play" size={24} className="mr-2" />
              Посмотреть кейсы
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-montserrat font-bold mb-6">
                Мы не просто <span className="text-orange">агентство</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Мы команда креативных маркетологов, которые превращают идеи в результат. За 8 лет мы помогли более чем 30 брендам увеличить продажи и стать лидерами в своих нишах.
              </p>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-3xl font-montserrat font-bold text-orange">30+</div>
                  <div className="text-sm text-gray-600">Брендов</div>
                </div>
                <div>
                  <div className="text-3xl font-montserrat font-bold text-purple">8</div>
                  <div className="text-sm text-gray-600">Лет опыта</div>
                </div>
                <div>
                  <div className="text-3xl font-montserrat font-bold text-emerald">15</div>
                  <div className="text-sm text-gray-600">Экспертов</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-orange-light via-purple-light to-emerald-light rounded-3xl flex items-center justify-center">
                <Icon name="Users" size={120} className="text-white opacity-80" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-center mb-16">
            Наши <span className="text-purple">услуги</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="p-8 hover:shadow-xl transition-all hover:-translate-y-2 border-0 bg-white hover:bg-gradient-to-br hover:from-purple-50 hover:to-orange-50">
                <div className="w-16 h-16 bg-gradient-to-br from-orange to-purple rounded-2xl flex items-center justify-center mb-6">
                  <Icon name={service.icon} size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-montserrat font-bold mb-4">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Cases Section */}
      <section id="cases" className="py-20 px-4 md:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-center mb-16">
            Наши <span className="text-emerald">кейсы</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cases.map((caseItem, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-2xl transition-all hover:-translate-y-4 border-0">
                <div className="relative h-48">
                  <img 
                    src={caseItem.image} 
                    alt={caseItem.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-white px-3 py-1 rounded-full text-sm font-medium">
                    {caseItem.client}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-montserrat font-bold mb-2">{caseItem.title}</h3>
                  <p className="text-gray-600 mb-4">{caseItem.description}</p>
                  <div className="bg-gradient-to-r from-orange-light to-purple-light p-3 rounded-lg">
                    <p className="text-sm font-medium text-gray-800">{caseItem.metrics}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-center mb-16">
            Что говорят <span className="text-orange">клиенты</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-8 text-center hover:shadow-xl transition-all border-0 bg-white">
                <div className="flex justify-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Icon key={i} name="Star" size={20} className="text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">"{testimonial.text}"</p>
                <div>
                  <div className="font-montserrat font-bold">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.company}</div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 md:px-8 bg-gradient-to-br from-purple via-purple-dark to-orange">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl md:text-5xl font-montserrat font-bold mb-8">
            Готовы взорвать ваш бизнес?
          </h2>
          <p className="text-xl mb-12 opacity-90">
            Оставьте заявку и получите бесплатную консультацию от наших экспертов
          </p>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-left">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                  <Icon name="Phone" size={24} />
                </div>
                <div>
                  <div className="font-medium">Телефон</div>
                  <div className="opacity-80">+7 (999) 123-45-67</div>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                  <Icon name="Mail" size={24} />
                </div>
                <div>
                  <div className="font-medium">Email</div>
                  <div className="opacity-80">hello@creative-agency.ru</div>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                  <Icon name="MapPin" size={24} />
                </div>
                <div>
                  <div className="font-medium">Адрес</div>
                  <div className="opacity-80">Москва, ул. Креативная, 42</div>
                </div>
              </div>
            </div>
            <Card className="p-8 bg-white bg-opacity-10 backdrop-blur-sm border-white border-opacity-20">
              <div className="space-y-4">
                <input 
                  type="text" 
                  placeholder="Ваше имя" 
                  className="w-full p-4 rounded-lg bg-white bg-opacity-20 border border-white border-opacity-30 placeholder-white placeholder-opacity-70 text-white"
                />
                <input 
                  type="email" 
                  placeholder="Ваш email" 
                  className="w-full p-4 rounded-lg bg-white bg-opacity-20 border border-white border-opacity-30 placeholder-white placeholder-opacity-70 text-white"
                />
                <textarea 
                  placeholder="Расскажите о вашем проекте" 
                  rows={4}
                  className="w-full p-4 rounded-lg bg-white bg-opacity-20 border border-white border-opacity-30 placeholder-white placeholder-opacity-70 text-white resize-none"
                />
                <Button className="w-full bg-white text-purple hover:bg-gray-100 text-lg py-4">
                  <Icon name="Send" size={20} className="mr-2" />
                  Отправить заявку
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 md:px-8 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <div className="text-2xl font-montserrat font-bold bg-gradient-to-r from-orange to-purple bg-clip-text text-transparent mb-4">
            CREATIVE AGENCY
          </div>
          <p className="text-gray-400 mb-8">Превращаем идеи в результат</p>
          <div className="flex justify-center space-x-6 mb-8">
            <Icon name="Instagram" size={24} className="hover:text-orange cursor-pointer transition-colors" />
            <Icon name="Facebook" size={24} className="hover:text-orange cursor-pointer transition-colors" />
            <Icon name="Linkedin" size={24} className="hover:text-orange cursor-pointer transition-colors" />
            <Icon name="Twitter" size={24} className="hover:text-orange cursor-pointer transition-colors" />
          </div>
          <div className="border-t border-gray-800 pt-8 text-gray-400 text-sm">
            © 2024 Creative Agency. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;