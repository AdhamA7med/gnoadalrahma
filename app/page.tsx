"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Heart,
  Phone,
  MessageCircle,
  Stethoscope,
  Users,
  Clock,
  Shield,
  Star,
  MapPin,
  User,
  Activity,
  Droplets,
  Sparkles,
  Award,
  CheckCircle,
} from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function Component() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const services = [
    {
      icon: <Stethoscope className="h-16 w-16 text-teal-600" />,
      title: "تمريض منزلي محترف",
      description: "ممرضين وممرضات بخبرة كبيرة",
      features: ["تركيب المحاليل", "متابعة الحالات المزمنة", "رعاية ما بعد العمليات", "قياس الضغط والسكر بشكل يومي"],
      color: "from-teal-50 to-teal-100",
      borderColor: "border-teal-200",
    },
    {
      icon: <Users className="h-16 w-16 text-blue-600" />,
      title: "جليسات رعاية مسنين",
      description: "جليسات مؤهلات برحمة وصبر",
      features: ["رعاية شخصية", "دعم نفسي", "مرافقة يومية", "إقامة كاملة حسب الحاجة"],
      color: "from-blue-50 to-blue-100",
      borderColor: "border-blue-200",
    },
    {
      icon: <Sparkles className="h-16 w-16 text-green-600" />,
      title: "عاملات نظافة",
      description: "جميع الجنسيات - يوميات وإقامة",
      features: ["مدربات على أعلى مستوى", "نظافة شاملة للمنزل", "التزام بالمواعيد", "إقامة أو دوام جزئي"],
      color: "from-green-50 to-green-100",
      borderColor: "border-green-200",
    },
  ]

  const features = [
    {
      icon: <Clock className="h-12 w-12 text-teal-600" />,
      title: "خدمة 24/7",
      description: "متاحون في أي وقت لخدمتكم",
      color: "bg-teal-50",
    },
    {
      icon: <Shield className="h-12 w-12 text-blue-600" />,
      title: "ضمان الجودة",
      description: "فريق مؤهل ومدرب على أعلى مستوى",
      color: "bg-blue-50",
    },
    {
      icon: <Heart className="h-12 w-12 text-rose-600" />,
      title: "رعاية بحب",
      description: "نتعامل مع كل حالة بحب واهتمام",
      color: "bg-rose-50",
    },
    {
      icon: <Award className="h-12 w-12 text-emerald-600" />,
      title: "خبرة واسعة",
      description: "سنوات من الخبرة في المجال الطبي",
      color: "bg-emerald-50",
    },
  ]

  const testimonials = [
    {
      name: "أحمد محمد السيد",
      text: "خدمة ممتازة وفريق محترف جداً. والدتي تحسنت كثيراً بفضل الرعاية المميزة التي تلقتها من الممرضات. أنصح الجميع بالتعامل مع مركز جنود الرحمة",
      rating: 5,
    },
    {
      name: "فاطمة علي حسن",
      text: "الممرضة كانت رائعة ومتفهمة وصبورة مع والدي المسن. الخدمة كانت على أعلى مستوى والأسعار مناسبة جداً. شكراً لكم على الخدمة المتميزة",
      rating: 5,
    },
    {
      name: "محمود حسن إبراهيم",
      text: "أفضل مركز تمريض منزلي في القاهرة بلا منازع. الفريق محترف والخدمة سريعة ومتميزة. تعاملت معهم أكثر من مرة وكانت التجربة رائعة في كل مرة",
      rating: 5,
    },
    {
      name: "نادية أحمد محمود",
      text: "جليسة الأطفال كانت ممتازة ومتفهمة. اهتمت بوالدتي بشكل رائع وكانت صبورة جداً معها. الخدمة تستحق كل التقدير والاحترام",
      rating: 5,
    },
    {
      name: "عبد الرحمن صلاح",
      text: "خدمة التمريض المنزلي كانت فوق الممتاز. الممرض كان مهني ومتمكن من عمله. أسعار معقولة وخدمة على أعلى مستوى. أنصح بشدة",
      rating: 5,
    },
    {
      name: "سارة محمد علي",
      text: "تعاملت مع المركز لرعاية جدتي وكانت التجربة رائعة. الجليسة كانت محترفة ومتفهمة وصبورة. شكراً لكم على الخدمة المميزة والاهتمام الرائع",
      rating: 5,
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50" dir="rtl">
      {/* Floating Contact Icons */}
      <div className="fixed left-6 top-1/2 transform -translate-y-1/2 z-50 flex flex-col gap-4">
        <Link
          href="tel:01031018577"
          className="bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white p-4 rounded-full shadow-xl transition-all duration-300 hover:scale-110 hover:shadow-2xl animate-pulse"
        >
          <Phone className="h-6 w-6" />
        </Link>
        <Link
          href="https://wa.me/201108782679"
          target="_blank"
          className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white p-4 rounded-full shadow-xl transition-all duration-300 hover:scale-110 hover:shadow-2xl animate-bounce"
        >
          <MessageCircle className="h-6 w-6" />
        </Link>
      </div>

      {/* Header */}
      <header className="bg-white/95 backdrop-blur-sm shadow-lg sticky top-0 z-40 border-b border-teal-100">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div
              className={`flex items-center gap-4 transition-all duration-1000 ${isVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"}`}
            >
              <div className="bg-gradient-to-r from-teal-500 to-blue-600 p-3 rounded-full shadow-lg">
                <Heart className="h-10 w-10 text-white animate-pulse" />
              </div>
              <div>
                <h1 className="text-3xl font-bold bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">
                  مركز جنود الرحمة
                </h1>
                <p className="text-lg text-gray-600 font-medium">للتمريض المنزلي</p>
              </div>
            </div>
            <nav className="hidden md:flex items-center gap-8">
              {["الرئيسية", "خدماتنا", "من نحن", "آراء العملاء", "تواصل معنا"].map((item, index) => (
                <Link
                  key={item}
                  href={`#${["home", "services", "about", "testimonials", "contact"][index]}`}
                  className="text-gray-700 hover:text-teal-600 font-medium text-lg transition-all duration-300 hover:scale-105 relative group"
                >
                  {item}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-teal-500 to-blue-500 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-teal-600 via-blue-600 to-blue-800"></div>
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4">
          <div
            className={`max-w-5xl mx-auto text-center text-white transition-all duration-1500 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
          >
            <div className="flex justify-center mb-8">
              <div className="bg-white/20 backdrop-blur-sm p-6 rounded-full">
                <Heart className="h-20 w-20 text-white animate-pulse" />
              </div>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
              🕊 جنود الرحمة..
              <br />
              <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                لأن الرحمة مش بس كلمة، دي خدمة بضمير
              </span>
            </h2>
            <p className="text-2xl mb-12 leading-relaxed max-w-4xl mx-auto font-light">
              لو بتدور على رعاية حقيقية لحد غالي عليك.. أو محتاج دعم في البيت براحة وأمان
              <br />
              <span className="text-yellow-300 font-semibold">مكتب جنود الرحمة جاهز يخدمك بكل حب واحترافية</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button
                size="lg"
                className="bg-white text-teal-600 hover:bg-gray-100 px-10 py-4 text-xl font-semibold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                <Phone className="ml-3 h-6 w-6" />
                اتصل بنا الآن
              </Button>
              <Button
                size="lg"
                className="border-2 border-white text-white hover:bg-white hover:text-teal-600 px-10 py-4 text-xl font-semibold rounded-full bg-transparent shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                <MessageCircle className="ml-3 h-6 w-6" />
                واتساب
              </Button>
            </div>
          </div>
        </div>

        {/* Floating medical icons */}
        <div className="absolute top-20 left-20 animate-float">
          <Stethoscope className="h-12 w-12 text-white/30" />
        </div>
        <div className="absolute bottom-20 right-20 animate-float-delayed">
          <Activity className="h-10 w-10 text-white/30" />
        </div>
        <div className="absolute top-1/2 left-10 animate-float">
          <Droplets className="h-8 w-8 text-white/30" />
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">لماذا نحن الأفضل؟</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-teal-500 to-blue-500 mx-auto rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`${feature.color} p-8 rounded-2xl text-center hover:shadow-xl transition-all duration-500 hover:scale-105 group`}
              >
                <div className="flex justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-gray-800 mb-6">خدماتنا المتميزة</h2>
            <p className="text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              نقدم مجموعة شاملة من الخدمات الطبية والرعاية المنزلية بأعلى معايير الجودة والمهنية
            </p>
            <div className="w-32 h-1 bg-gradient-to-r from-teal-500 to-blue-500 mx-auto rounded-full mt-6"></div>
          </div>
          <div className="grid lg:grid-cols-3 gap-10">
            {services.map((service, index) => (
              <Card
                key={index}
                className={`hover:shadow-2xl transition-all duration-500 hover:scale-105 bg-gradient-to-br ${service.color} border-2 ${service.borderColor} overflow-hidden group`}
              >
                <CardContent className="p-10">
                  <div className="flex justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-800 text-center">{service.title}</h3>
                  <p className="text-gray-600 text-center mb-6 text-lg">{service.description}</p>
                  <div className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-teal-600 flex-shrink-0" />
                        <span className="text-gray-700 font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-teal-50/50 to-blue-50/50"></div>
        <div className="relative container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-5xl font-bold text-gray-800 mb-12">من نحن</h2>
            <div className="bg-white/80 backdrop-blur-sm p-12 rounded-3xl shadow-2xl border border-teal-100">
              <div className="flex justify-center mb-8">
                <div className="bg-gradient-to-r from-teal-500 to-blue-600 p-6 rounded-full">
                  <Heart className="h-16 w-16 text-white" />
                </div>
              </div>
              <p className="text-2xl text-gray-700 leading-relaxed mb-8 font-light">
                مكتب جنود الرحمة جاهز يخدمك بكل حب واحترافية 👩‍⚕️👵🏡
              </p>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                نحن فريق متخصص في تقديم خدمات التمريض المنزلي والرعاية الصحية بأعلى معايير الجودة والمهنية. نؤمن بأن
                الرعاية الصحية الجيدة حق لكل إنسان، ولذلك نسعى لتقديم خدماتنا بأفضل جودة ممكنة.
              </p>
              <div className="bg-gradient-to-r from-teal-500 to-blue-600 text-white p-8 rounded-2xl">
                <h3 className="text-2xl font-bold mb-4">🎯 هدفنا</h3>
                <p className="text-xl font-light">راحتك.. وراحة اللي بتحبهم</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-24 bg-gradient-to-br from-gray-50 to-teal-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-gray-800 mb-6">آراء عملائنا الكرام</h2>
            <p className="text-2xl text-gray-600 max-w-3xl mx-auto">ما يقوله عملاؤنا عن تجربتهم معنا</p>
            <div className="w-32 h-1 bg-gradient-to-r from-teal-500 to-blue-500 mx-auto rounded-full mt-6"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="hover:shadow-2xl transition-all duration-500 hover:scale-105 bg-white/80 backdrop-blur-sm border border-teal-100"
              >
                <CardContent className="p-8">
                  <div className="flex justify-center mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-6 italic leading-relaxed text-lg">"{testimonial.text}"</p>
                  <div className="flex items-center justify-center">
                    <div className="bg-gradient-to-r from-teal-500 to-blue-600 p-2 rounded-full ml-3">
                      <User className="h-5 w-5 text-white" />
                    </div>
                    <span className="font-bold text-gray-800 text-lg">{testimonial.name}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="py-24 bg-gradient-to-br from-teal-600 via-blue-600 to-blue-800 text-white relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold mb-6">📞 للتواصل والاستفسار</h2>
            <p className="text-2xl font-light">نحن هنا لخدمتكم في أي وقت</p>
          </div>
          <div className="grid md:grid-cols-2 gap-16 max-w-6xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm p-10 rounded-3xl">
              <h3 className="text-3xl font-bold mb-8 flex items-center">
                <Phone className="ml-4 h-8 w-8" />
                معلومات التواصل
              </h3>
              <div className="space-y-6">
                <div className="flex items-center bg-white/10 p-6 rounded-2xl">
                  <Phone className="h-8 w-8 ml-4 text-yellow-300" />
                  <div>
                    <p className="font-bold text-xl text-yellow-300">م/ نارمن</p>
                    <p className="text-lg">01031018577</p>
                    <p className="text-lg">01108782679</p>
                  </div>
                </div>
                <div className="flex items-center bg-white/10 p-6 rounded-2xl">
                  <Phone className="h-8 w-8 ml-4 text-yellow-300" />
                  <div>
                    <p className="font-bold text-xl text-yellow-300">مستر/ علاء</p>
                    <p className="text-lg">01031018577</p>
                  </div>
                </div>
                <div className="flex items-center bg-white/10 p-6 rounded-2xl">
                  <MapPin className="h-8 w-8 ml-4 text-yellow-300" />
                  <div>
                    <p className="font-bold text-xl text-yellow-300">الموقع</p>
                    <p className="text-lg">القاهرة، مصر</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-10 rounded-3xl">
              <h3 className="text-3xl font-bold mb-8 flex items-center">
                <Clock className="ml-4 h-8 w-8" />
                ساعات العمل
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center bg-white/10 p-4 rounded-xl">
                  <span className="text-xl">السبت - الخميس</span>
                  <span className="text-xl font-bold text-yellow-300">24 ساعة</span>
                </div>
                <div className="flex justify-between items-center bg-white/10 p-4 rounded-xl">
                  <span className="text-xl">الجمعة</span>
                  <span className="text-xl font-bold text-yellow-300">24 ساعة</span>
                </div>
                <div className="bg-gradient-to-r from-yellow-400 to-orange-400 text-gray-800 p-6 rounded-2xl mt-8">
                  <p className="text-center font-bold text-xl">⚡ خدمة طوارئ متاحة على مدار الساعة</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-12">
            <div className="md:col-span-2">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-gradient-to-r from-teal-500 to-blue-600 p-3 rounded-full">
                  <Heart className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">مركز جنود الرحمة</h3>
                  <p className="text-gray-400">للتمريض المنزلي</p>
                </div>
              </div>
              <p className="text-gray-400 leading-relaxed text-lg mb-6">
                نقدم خدمات التمريض المنزلي والرعاية الصحية بأعلى معايير الجودة والمهنية. هدفنا راحتك وراحة من تحب.
              </p>
              <div className="flex gap-4">
                <Link
                  href="tel:01031018577"
                  className="bg-teal-600 hover:bg-teal-700 p-3 rounded-full transition-colors duration-300"
                >
                  <Phone className="h-5 w-5" />
                </Link>
                <Link
                  href="https://wa.me/201108782679"
                  target="_blank"
                  className="bg-green-600 hover:bg-green-700 p-3 rounded-full transition-colors duration-300"
                >
                  <MessageCircle className="h-5 w-5" />
                </Link>
              </div>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-6 text-teal-300">خدماتنا</h4>
              <ul className="space-y-3 text-gray-400">
                <li className="hover:text-white transition-colors duration-300">تمريض منزلي</li>
                <li className="hover:text-white transition-colors duration-300">جليسات مسنين</li>
                <li className="hover:text-white transition-colors duration-300">عاملات نظافة</li>
                <li className="hover:text-white transition-colors duration-300">رعاية ما بعد العمليات</li>
                <li className="hover:text-white transition-colors duration-300">متابعة الحالات المزمنة</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-6 text-teal-300">تواصل معنا</h4>
              <div className="space-y-3 text-gray-400">
                <p className="flex items-center">
                  <Phone className="h-4 w-4 ml-2" />
                  01031018577
                </p>
                <p className="flex items-center">
                  <Phone className="h-4 w-4 ml-2" />
                  01108782679
                </p>
                <p className="flex items-center">
                  <MapPin className="h-4 w-4 ml-2" />
                  القاهرة، مصر
                </p>
                <p className="flex items-center">
                  <MessageCircle className="h-4 w-4 ml-2" />
                  متاح على الواتساب
                </p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-12 pt-8 text-center">
            <p className="text-gray-400 text-lg mb-3">© 2024 مركز جنود الرحمة للتمريض المنزلي. جميع الحقوق محفوظة</p>
            <p className="text-gray-500">
              تم تطوير الموقع بواسطة{" "}
              <Link
                href="https://wa.me/201153903786"
                target="_blank"
                className="text-teal-400 hover:text-teal-300 underline font-semibold transition-colors duration-300"
              >
                ادهم احمد
              </Link>
            </p>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 4s ease-in-out infinite;
        }
      `}</style>
    </div>
  )
}
