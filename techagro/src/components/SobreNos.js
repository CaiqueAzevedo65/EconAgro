import React from 'react';
import '../Styles/SobreNos.css';

const SobreNos = () => {
    return (
        <main className="container mx-auto mt-4 p-4">
            <section id="sobre-nos" className="mb-8">
                <h2 className="text-center text-success">Sobre Nós</h2>
                <p className="text-center mb-4">
                    Bem-vindo à AgroTech!
                </p>
                <div className="row">
                    <div>
                        <p>
                        A AgroTech é uma empresa comprometida com a transformação digital do agronegócio. Atuamos com soluções tecnológicas inovadoras voltadas para o aumento da eficiência no campo, apoiando agricultores, cooperativas e empresas do setor agrícola em sua jornada rumo à modernização.
                        Nossa missão é potencializar a produtividade rural por meio de ferramentas inteligentes, como monitoramento por sensores, análise de dados, automação de processos e gestão integrada de propriedades. Acreditamos que a tecnologia é uma aliada fundamental para garantir maior rentabilidade, sustentabilidade e tomada de decisões mais precisas no agronegócio.
                        Contamos com uma equipe multidisciplinar apaixonada por inovação, que trabalha lado a lado com o produtor para entender suas necessidades e desenvolver soluções personalizadas.
                        Entre em contato conosco para conhecer nossos serviços e descobrir como a AgroTech pode impulsionar o futuro da sua produção agrícola.
                        </p>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default SobreNos;