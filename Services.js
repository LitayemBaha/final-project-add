import React, { Component } from 'react';
class Services extends Component {
    render() {
        return (
            <div className="body-services">
                <h2 className="title-services">Types de soins à domicile</h2>
                <i class="fas fa-user-md"></i>
                <ul className="groupe-of-seurves">
                    <li className="service-item">Pansements simples et complexes</li>
                    <li className="service-item">Injections (anticoagulants, antibiotiques, vitamines, anti-inflammatoires, vaccins...)</li>
                    <li className="service-item">Prise en charge des patients diabétiques, surveillance glycémie et insuline</li>
                    <li className="service-item">L’intervention auprès des femmes enceintes</li>
                    <li className="service-item">L’intervention auprès des personnes limitées dans leurs déplacements</li>
                </ul>
            </div>
        )
    }
}
export default Services;
