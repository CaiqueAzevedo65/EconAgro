import React from 'react';
import '../Styles/SobreNos.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSeedling, faChartLine, faHandsHelping } from '@fortawesome/free-solid-svg-icons';

const SobreNos = () => {
    const teamMembers = [
        {
            name: 'Carlos Silva',
            role: 'CEO & Fundador',
            image: 'https://randomuser.me/api/portraits/men/32.jpg',
            bio: 'Engenheiro Agrônomo com mais de 15 anos de experiência em gestão agrícola.'
        },
        {
            name: 'Ana Santos',
            role: 'CTO',
            image: 'https://randomuser.me/api/portraits/women/44.jpg',
            bio: 'Especialista em tecnologia agrícola e análise de dados.'
        },
        {
            name: 'Pedro Oliveira',
            role: 'Diretor Comercial',
            image: 'https://randomuser.me/api/portraits/men/22.jpg',
            bio: 'Experiente em negócios e desenvolvimento de mercado no agronegócio.'
        }
    ];

    const features = [
        {
            icon: faSeedling,
            title: 'Sustentabilidade',
            description: 'Soluções que promovem práticas agrícolas sustentáveis e responsáveis.'
        },
        {
            icon: faChartLine,
            title: 'Análise de Dados',
            description: 'Tomada de decisões baseada em dados precisos e em tempo real.'
        },
        {
            icon: faHandsHelping,
            title: 'Suporte Especializado',
            description: 'Equipe técnica altamente qualificada para atender suas necessidades.'
        }
    ];

    return (
        <div className="sobre-nos">
            {/* Hero Section */}
            <section className="about-hero">
                <h1>Transformando o Agronegócio com Tecnologia</h1>
                <p>Conectando o campo às inovações tecnológicas para um futuro mais produtivo e sustentável</p>
            </section>

            {/* Sobre Nós */}
            <section className="about-content">
                <div className="about-section">
                    <div className="about-text">
                        <h2>Nossa História</h2>
                        <p>
                            Fundada em 2023, a EconAgro nasceu da paixão por tecnologia e agricultura. 
                            Nossa jornada começou com o objetivo de simplificar a vida no campo através 
                            de soluções inovadoras que integram tecnologia de ponta com o conhecimento 
                            tradicional do agronegócio.
                        </p>
                        <p>
                            Acreditamos que a tecnologia deve ser acessível a todos os produtores, 
                            independentemente do tamanho de sua propriedade. Por isso, desenvolvemos 
                            ferramentas intuitivas e eficientes que realmente fazem a diferença no dia a dia do campo.
                        </p>
                    </div>
                    <div className="about-image">
                        <img src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80" 
                             alt="Campo agrícola com tecnologia" />
                    </div>
                </div>

                {/* Missão, Visão e Valores */}
                <div className="about-section reverse">
                    <div className="about-image">
                        <img src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80" 
                             alt="Tecnologia no campo" />
                    </div>
                    <div className="about-text">
                        <h2>Nossa Missão</h2>
                        <p>
                            Potencializar a produtividade e sustentabilidade no campo através de 
                            soluções tecnológicas inovadoras, acessíveis e fáceis de usar.
                        </p>
                        
                        <h2>Nossa Visão</h2>
                        <p>
                            Ser referência em inovação tecnológica para o agronegócio, 
                            contribuindo para uma produção agrícola mais eficiente e sustentável.
                        </p>
                        
                        <h2>Nossos Valores</h2>
                        <ul>
                            <li>Inovação contínua</li>
                            <li>Sustentabilidade ambiental</li>
                            <li>Compromisso com o cliente</li>
                            <li>Excelência operacional</li>
                            <li>Ética e transparência</li>
                        </ul>
                    </div>
                </div>

                {/* Destaques */}
                <div className="features-grid">
                    {features.map((feature, index) => (
                        <div key={index} className="feature-card">
                            <div className="feature-icon">
                                <FontAwesomeIcon icon={feature.icon} />
                            </div>
                            <h3>{feature.title}</h3>
                            <p>{feature.description}</p>
                        </div>
                    ))}
                </div>

                {/* Nossa Equipe */}
                <section className="team-section">
                    <h2>Conheça Nossa Equipe</h2>
                    <p>Profissionais apaixonados por tecnologia e agricultura</p>
                    
                    <div className="team-grid">
                        {teamMembers.map((member, index) => (
                            <div key={index} className="team-member">
                                <div className="team-image">
                                    <img src={member.image} alt={member.name} />
                                </div>
                                <h3>{member.name}</h3>
                                <p className="text-primary">{member.role}</p>
                                <p>{member.bio}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Chamada para Ação */}
                <div className="text-center my-5">
                    <h2>Pronto para transformar sua produção agrícola?</h2>
                    <p className="lead">Entre em contato e descubra como podemos ajudar seu negócio a crescer</p>
                    <button className="btn btn-primary btn-lg mt-3">Fale Conosco</button>
                </div>
            </section>
        </div>
    );
};

export default SobreNos;