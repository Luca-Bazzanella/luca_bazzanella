import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { ArrowLeft, Calendar, MapPin, Users, ExternalLink } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';

const AllConferences = () => {
  const navigate = useNavigate();

  const featuredConferences = [
    {
      title: "Sostenibilità e mobilità elettrica urbana. Esperienze e casi a confronto",
      subtitle: "Villa Madruzzo Conference",
      date: "2023",
      location: "Villa Madruzzo",
      attendees: "100+",
      description: "Conferenza dedicata alla sostenibilità della mobilità elettrica urbana, condivisione di esperienze e confronto tra diversi casi di città europee. L'evento ha riunito esperti internazionali, amministratori locali e rappresentanti del settore privato per discutere le migliori pratiche e le sfide nell'implementazione di sistemi di mobilità elettrica sostenibile nelle aree urbane.",
      videoId: null,
      links: [
        { name: "Sustainable Economy", url: "https://www.sustainableeconomy.eu/progetti/conferenza-sostenibilita-e-mobilita-elettrica-urbana-esperienze-e-casi-aconfronto/" }
      ]
    },
    {
      title: "Green is not left",
      subtitle: "Parlamento Europeo",
      date: "2022",
      location: "European Parliament, Brussels",
      attendees: "50+",
      description: "Conferenza stampa al Parlamento Europeo sulla trasversalità delle politiche ambientali e l'importanza della collaborazione cross-party sulle iniziative verdi. L'evento ha evidenziato come le questioni ambientali trascendano le divisioni politiche tradizionali e richiedano un approccio collaborativo per affrontare le sfide climatiche globali.",
      videoId: "cfM3aVlyXCY",
      links: [
        { name: "TG Video", url: "https://www.youtube.com/watch?v=cfM3aVlyXCY" },
        { name: "CagliariPad", url: "https://www.cagliaripad.it/394624/europa-conferenza-green-is-not-left-lambiente-non-e-di-sinistra-a-bruxelles/" }
      ]
    },
    {
      title: "Il futuro della mobilità sostenibile in Trentino",
      subtitle: "MUSE Conference",
      date: "2022",
      location: "MUSE, Trento",
      attendees: "150+",
      description: "Conferenza pubblica sui temi della mobilità sostenibile con esperti internazionali e focus sulle soluzioni innovative per il territorio trentino. L'evento ha presentato le ultime tecnologie e strategie per implementare sistemi di trasporto sostenibile nelle regioni alpine, con particolare attenzione alle sfide specifiche del territorio montano.",
      videoId: "WTpy8q6fPdQ",
      links: [
        { name: "SEA", url: "https://www.sustainableeconomy.eu/progetti/conferenza-pubblica-il-futuro-della-mobilita-sostenibile/" },
        { name: "PAT", url: "https://www.ufficiostampa.provincia.tn.it/Comunicati/Mobility-il-futuro-della-mobilita-sostenibile-in-Trentino-domani-una-conferenza-al-Muse-con-esperti-internazionali" }
      ]
    }
  ];

  const allConferences = [
    {
      title: "Sostenibilità e mobilità elettrica urbana. Esperienze e casi a confronto",
      date: "2023",
      location: "Villa Madruzzo",
      attendees: "100+",
      topic: "Conference focused on urban electric mobility sustainability, sharing experiences and comparing different cases from various European cities.",
      link: "https://www.sustainableeconomy.eu/progetti/conferenza-sostenibilita-e-mobilita-elettrica-urbana-esperienze-e-casi-aconfronto/"
    },
    {
      title: "Sostenibilità nel trasporto ferroviario. Quali prospettive per il treno delle Dolomiti?",
      date: "2023",
      location: "Palazzo Perlerhof",
      attendees: "80+",
      topic: "Analysis of sustainability in railway transport with focus on the Dolomites train and future prospects for sustainable mountain mobility.",
      link: "https://www.sustainableeconomy.eu/progetti/sostenibilita-nel-trasporto-ferroviario-quali-prospettive-per-il-trenodelle-dolomiti/"
    },
    {
      title: "Parlamento Europeo conferenza stampa 'Green is not left'",
      date: "2022",
      location: "European Parliament, Brussels",
      attendees: "50+",
      topic: "Press conference at the European Parliament discussing how environmental policies transcend political boundaries and the importance of cross-party collaboration on green initiatives.",
      links: [
        { name: "TG Video", url: "https://www.youtube.com/watch?v=cfM3aVlyXCY&ab_channel=SustainableEconomyAssociation" },
        { name: "CagliariPad", url: "https://www.cagliaripad.it/394624/europa-conferenza-green-is-not-left-lambiente-non-e-di-sinistra-a-bruxelles/" },
        { name: "Informazione.it", url: "https://www.informazione.it/c/74E3E8CC-4B26-4441-9943-D5B8B214CD5F/SFIDE-GLOBALI-GREEN-IS-NOT-LEFT-L-AMBIENTE-NON-e-DI-SINISTRA" },
        { name: "SEA", url: "https://www.sustainableeconomy.eu/progetti/conferenza-stampa-green-is-not-left/" },
        { name: "Video Dichiarazioni", url: "https://www.youtube.com/watch?v=lseWzO_fOWs&t=20s&ab_channel=SustainableEconomyAssociation" }
      ]
    },
    {
      title: "Il futuro della mobilità sostenibile in Trentino",
      date: "2022",
      location: "MUSE, Trento",
      attendees: "150+",
      topic: "Public conference on the future of sustainable mobility in Trentino, featuring international experts and local stakeholders discussing innovative transportation solutions.",
      links: [
        { name: "SEA", url: "https://www.sustainableeconomy.eu/progetti/conferenza-pubblica-il-futuro-della-mobilita-sostenibile/" },
        { name: "PAT", url: "https://www.ufficiostampa.provincia.tn.it/Comunicati/Mobility-il-futuro-della-mobilita-sostenibile-in-Trentino-domani-una-conferenza-al-Muse-con-esperti-internazionali" },
        { name: "TGR Video", url: "https://www.youtube.com/watch?v=WTpy8q6fPdQ&t=2s&ab_channel=SustainableEconomyAssociation" }
      ]
    },
    {
      title: "Commissione di Vigilanza FESR / FSE",
      date: "2021",
      location: "Confcommercio Trentino",
      attendees: "30+",
      topic: "Oversight committee meeting for ERDF/ESF funds, discussing the implementation and monitoring of European structural funds in the Trentino region.",
      links: [
        { name: "YouTube", url: "https://www.youtube.com/watch?v=1_0FOnf7V40" },
        { name: "Facebook", url: "https://www.facebook.com/watch/?v=573766943245518" }
      ]
    },
    {
      title: "Il Partenariato Pubblico Privato per uno sviluppo sostenibile del Trentino",
      date: "2021",
      location: "Palazzo Roccabruna",
      attendees: "100+",
      topic: "Conference on Public-Private Partnership for sustainable development in Trentino, exploring innovative collaboration models between public institutions and private sector.",
      links: [
        { name: "PAT", url: "https://agenda2030.provincia.tn.it/In-evidenza/Il-Partenariato-Pubblico-Privato-per-uno-sviluppo-sostenibile-del-Trentino" },
        { name: "Confcommercio", url: "https://unione.tn.it/notizia/il-partenariato-pubblico-privato-per-uno-sviluppo-sostenibile-del-trentino" },
        { name: "YouTube LB", url: "https://www.youtube.com/watch?v=hLtzAH29ti8" }
      ]
    },
    {
      title: "Il Partenariato Pubblico Privato: un'opportunità per PMI ed enti locali",
      date: "2021",
      location: "Online Seminar",
      attendees: "80+",
      topic: "Online seminar exploring Public-Private Partnership opportunities for SMEs and local authorities, providing practical tools and case studies.",
      links: [
        { name: "Confcommercio", url: "https://www.unione.tn.it/notizia/seminario-online-il-partenariato-pubblico-privato-un-opportunit-per-pmi-ed-enti-locali" },
        { name: "YouTube", url: "https://www.youtube.com/watch?v=nVIz903jFKY&t=80s" },
        { name: "Cassa del Trentino", url: "https://www.cassadeltrentino.it/News/Il-PPP-un-opportunita-per-PMI-ed-Enti-locali.-Il-seminario-di-Confcommercio-con-Cassa-del-Trentino-e-Consorzio-dei-Comuni" }
      ]
    },
    {
      title: "PNRR in Trentino tra opportunità e rischi",
      date: "May 31, 2022",
      location: "Ferrari Wineries, Trento",
      attendees: "200+",
      topic: "High-profile conference analyzing opportunities and risks of the National Recovery and Resilience Plan for Trentino, featuring key stakeholders and policy experts.",
      links: [
        { name: "PAT", url: "https://www.ufficiostampa.provincia.tn.it/Comunicati/PNRR-in-Trentino-tra-opportunita-e-rischi-la-conferenza" },
        { name: "SEA", url: "https://www.sustainableeconomy.eu/eventi/comunicato-stampa-conferenza-31-05-2022-cantine-ferrari-trento/" },
        { name: "Video", url: "https://www.youtube.com/watch?v=l8D61N_3-HA" },
        { name: "Regioni", url: "https://www.regioni.it/dalleregioni/2022/05/31/trento-pnrr-in-trentino-tra-opportunita-e-rischi-la-conferenza-648910/" }
      ]
    },
    {
      title: "Inaugurazione contest Smart City del Futuro",
      date: "2023",
      location: "MUSE, Trento",
      attendees: "200+",
      topic: "Launch of the Smart City of the Future contest for students, promoting innovation and sustainable urban development through educational initiatives.",
      links: [
        { name: "PAT", url: "https://educazioneambientale.provincia.tn.it/Catalogo-del-sistema-provinciale/Contest-Smart-City-del-Futuro" },
        { name: "CCI", url: "https://www.cci.tn.it/contest-smart-city-del-futuro/" },
        { name: "Adigetto", url: "https://www.ladigetto.it/interno/133319-la-premiazione-si-e-tenuta-stamattina-al-muse.html" },
        { name: "SEA", url: "https://www.sustainableeconomy.eu/progetti/inaugurato-al-muse-il-contest-tra-istituti-scolastici-smart-city-del-futuro/" }
      ]
    },
    {
      title: "Confronto politico dal vivo all'americana - Sviluppo Sostenibile in Trentino",
      date: "October 17, 2023",
      location: "Palazzo Benvenuti, Trento",
      attendees: "120+",
      topic: "American-style political debate on sustainable development in Trentino, featuring direct confrontation between different political and economic perspectives.",
      link: "https://www.sustainableeconomy.eu/progetti/sviluppo-sostenibile-in-trentino-confronto-dal-vivo-allamericanamartedi-17-ottobre-1700-1900-palazzo-benvenuti-trento/"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <button 
              onClick={() => navigate('/')}
              className="flex items-center text-blue-600 hover:text-blue-700 mb-8 transition-colors"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </button>
            
            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-6xl font-serif font-bold text-slate-900 mb-6">
                All Conferences
              </h1>
              <p className="text-xl text-slate-700 leading-relaxed mb-8">
                A comprehensive overview of conferences, events and speaking engagements on sustainability, management and innovation.
              </p>
            </div>
          </div>
        </section>

        {/* Featured Conferences */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-slate-900 mb-12">Featured Conferences</h2>
            
            <Card className="glass-effect border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="space-y-8">
                  {featuredConferences.map((conference, index) => (
                    <div key={index} className="border-b border-slate-200 last:border-b-0 pb-8 last:pb-0">
                      <div className="grid lg:grid-cols-3 gap-8 items-start">
                        <div className="lg:col-span-2">
                          <h3 className="text-lg font-serif font-semibold text-slate-900 mb-2">{conference.title}</h3>
                          <p className="text-blue-600 font-medium mb-3">{conference.subtitle}</p>
                          
                          <div className="flex flex-wrap gap-4 text-sm text-slate-600 mb-4">
                            <div className="flex items-center">
                              <Calendar className="h-4 w-4 mr-2 text-slate-500" />
                              {conference.date}
                            </div>
                            <div className="flex items-center">
                              <MapPin className="h-4 w-4 mr-2 text-slate-500" />
                              {conference.location}
                            </div>
                            <div className="flex items-center">
                              <Users className="h-4 w-4 mr-2 text-slate-500" />
                              {conference.attendees}
                            </div>
                          </div>
                          
                          <p className="text-slate-700 text-sm leading-relaxed mb-4">{conference.description}</p>
                          
                          <div className="flex flex-wrap gap-2">
                            {conference.links.map((link, linkIndex) => (
                              <a 
                                key={linkIndex}
                                href={link.url} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="inline-flex items-center text-blue-600 hover:text-blue-700 text-sm font-medium"
                              >
                                {link.name}
                                <ExternalLink className="h-3 w-3 ml-1" />
                              </a>
                            ))}
                          </div>
                        </div>
                        
                        <div className="lg:col-span-1">
                          {conference.videoId && (
                            <div className="aspect-video rounded-lg overflow-hidden shadow-md">
                              <iframe
                                width="100%"
                                height="100%"
                                src={`https://www.youtube.com/embed/${conference.videoId}`}
                                title={conference.title}
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                className="w-full h-full"
                              ></iframe>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* All Conferences Grid */}
        <section className="py-16 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-slate-900 mb-12">All Conferences & Events</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {allConferences.map((conference, index) => (
                <Card key={index} className="glass-effect hover-scale border-0 shadow-lg">
                  <CardContent className="p-8">
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex-1">
                        <h3 className="text-xl font-serif font-semibold text-slate-900 mb-3">{conference.title}</h3>
                        
                        <div className="flex flex-wrap gap-4 text-sm text-slate-600 mb-6">
                          <div className="flex items-center">
                            <Calendar className="h-4 w-4 mr-2 text-slate-500" />
                            {conference.date}
                          </div>
                          <div className="flex items-center">
                            <MapPin className="h-4 w-4 mr-2 text-slate-500" />
                            {conference.location}
                          </div>
                          <div className="flex items-center">
                            <Users className="h-4 w-4 mr-2 text-slate-500" />
                            {conference.attendees} partecipanti
                          </div>
                        </div>
                        
                        <p className="text-slate-700 font-light leading-relaxed mb-4">{conference.topic}</p>
                        
                        {/* Links */}
                        <div className="flex flex-wrap gap-2">
                          {conference.link && (
                            <a 
                              href={conference.link} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="inline-flex items-center text-blue-600 hover:text-blue-700 text-sm font-medium"
                            >
                              Learn more
                              <ExternalLink className="h-3 w-3 ml-1" />
                            </a>
                          )}
                          {conference.links && conference.links.map((link, linkIndex) => (
                            <a 
                              key={linkIndex}
                              href={link.url} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="inline-flex items-center text-blue-600 hover:text-blue-700 text-sm font-medium"
                            >
                              {link.name}
                              <ExternalLink className="h-3 w-3 ml-1" />
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default AllConferences;
