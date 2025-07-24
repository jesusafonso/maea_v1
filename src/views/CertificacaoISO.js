import React, { useState } from "react";
import { useIntl } from "react-intl";
import contactosFundo from "../assets/img/contactos_fundos.jpg";

export default function CertificacaoISO() {
  const intl = useIntl();
  const [openISO, setOpenISO] = useState(null);

  // Lista dos ISOs (apenas ISO 9001 internacionalizado como exemplo)
  const isos = [
    {
      id: "iso9001",
      title: intl.formatMessage({ id: "certificacao_iso_9001_title" }),
      icon: "fas fa-check-circle",
      content: (
        <div className="text-blueGray-600 text-base space-y-4">
          <p><strong>{intl.formatMessage({ id: "certificacao_iso_9001_highlight" })}</strong></p>
          <p>{intl.formatMessage({ id: "certificacao_iso_9001_desc1" })}</p>
          <p>{intl.formatMessage({ id: "certificacao_iso_9001_desc2" })}</p>
          <p>{intl.formatMessage({ id: "certificacao_iso_9001_desc3" })}</p>
          <h3 className="font-semibold mt-4">{intl.formatMessage({ id: "certificacao_iso_9001_sg_title" })}</h3>
          <p>{intl.formatMessage({ id: "certificacao_iso_9001_sg_desc" })}</p>
          <h3 className="font-semibold mt-4">{intl.formatMessage({ id: "certificacao_iso_9001_benefits_title" })}</h3>
          <ul className="list-disc ml-12 space-y-1">
            <li>{intl.formatMessage({ id: "certificacao_iso_9001_benefit1" })}</li>
            <li>{intl.formatMessage({ id: "certificacao_iso_9001_benefit2" })}</li>
            <li>{intl.formatMessage({ id: "certificacao_iso_9001_benefit3" })}</li>
            <li>{intl.formatMessage({ id: "certificacao_iso_9001_benefit4" })}</li>
            <li>{intl.formatMessage({ id: "certificacao_iso_9001_benefit5" })}</li>
          </ul>
          <h3 className="font-semibold mt-4">{intl.formatMessage({ id: "certificacao_iso_9001_process_title" })}</h3>
          <p>{intl.formatMessage({ id: "certificacao_iso_9001_process_desc" })}</p>
          <h3 className="font-semibold mt-4">{intl.formatMessage({ id: "certificacao_iso_9001_why_title" })}</h3>
          <p>{intl.formatMessage({ id: "certificacao_iso_9001_why_desc" })}</p>
        </div>
      )
    },
    {
      id: "iso14001",
      title: intl.formatMessage({ id: "certificacao_iso_14001_title" }),
      icon: "fas fa-leaf",
      content: (
        <div className="text-blueGray-600 text-base space-y-4">
          <p><strong>{intl.formatMessage({ id: "certificacao_iso_14001_highlight" })}</strong></p>
          <p>{intl.formatMessage({ id: "certificacao_iso_14001_desc1" })}</p>
          <p>{intl.formatMessage({ id: "certificacao_iso_14001_desc2" })}</p>
          <p>{intl.formatMessage({ id: "certificacao_iso_14001_desc3" })}</p>
          <p>{intl.formatMessage({ id: "certificacao_iso_14001_desc4" })}</p>
          <ul className="list-disc ml-12 space-y-1">
            <li>{intl.formatMessage({ id: "certificacao_iso_14001_list1" })}</li>
            <li>{intl.formatMessage({ id: "certificacao_iso_14001_list2" })}</li>
          </ul>
          <h3 className="font-semibold mt-4">{intl.formatMessage({ id: "certificacao_iso_14001_benefits_title" })}</h3>
          <ul className="list-disc ml-12 space-y-1">
            <li>{intl.formatMessage({ id: "certificacao_iso_14001_benefit1" })}</li>
            <li>{intl.formatMessage({ id: "certificacao_iso_14001_benefit2" })}</li>
            <li>{intl.formatMessage({ id: "certificacao_iso_14001_benefit3" })}</li>
            <li>{intl.formatMessage({ id: "certificacao_iso_14001_benefit4" })}</li>
            <li>{intl.formatMessage({ id: "certificacao_iso_14001_benefit5" })}</li>
          </ul>
          <h3 className="font-semibold mt-4">{intl.formatMessage({ id: "certificacao_iso_14001_why_title" })}</h3>
          <p>{intl.formatMessage({ id: "certificacao_iso_14001_why_desc" })}</p>
        </div>
      )
    },
    {
      id: "ohsas18001",
      title: intl.formatMessage({ id: "certificacao_ohsas_18001_title" }),
      icon: "fas fa-hard-hat",
      content: (
        <div className="text-blueGray-600 text-base space-y-4">
          <p><strong>{intl.formatMessage({ id: "certificacao_ohsas_18001_highlight" })}</strong></p>
          <p>{intl.formatMessage({ id: "certificacao_ohsas_18001_desc1" })}</p>
          <p>{intl.formatMessage({ id: "certificacao_ohsas_18001_desc2" })}</p>
          <p>{intl.formatMessage({ id: "certificacao_ohsas_18001_desc3" })}</p>
          <p>{intl.formatMessage({ id: "certificacao_ohsas_18001_desc4" })}</p>
          <ul className="list-disc ml-12 space-y-1">
            <li>{intl.formatMessage({ id: "certificacao_ohsas_18001_list1" })}</li>
            <li>{intl.formatMessage({ id: "certificacao_ohsas_18001_list2" })}</li>
            <li>{intl.formatMessage({ id: "certificacao_ohsas_18001_list3" })}</li>
            <li>{intl.formatMessage({ id: "certificacao_ohsas_18001_list4" })}</li>
            <li>{intl.formatMessage({ id: "certificacao_ohsas_18001_list5" })}</li>
            <li>{intl.formatMessage({ id: "certificacao_ohsas_18001_list6" })}</li>
          </ul>
          <h3 className="font-semibold mt-4">{intl.formatMessage({ id: "certificacao_ohsas_18001_benefits_title" })}</h3>
          <ul className="list-disc ml-12 space-y-1">
            <li>{intl.formatMessage({ id: "certificacao_ohsas_18001_benefit1" })}</li>
            <li>{intl.formatMessage({ id: "certificacao_ohsas_18001_benefit2" })}</li>
            <li>{intl.formatMessage({ id: "certificacao_ohsas_18001_benefit3" })}</li>
            <li>{intl.formatMessage({ id: "certificacao_ohsas_18001_benefit4" })}</li>
            <li>{intl.formatMessage({ id: "certificacao_ohsas_18001_benefit5" })}</li>
          </ul>
          <h3 className="font-semibold mt-4">{intl.formatMessage({ id: "certificacao_ohsas_18001_why_title" })}</h3>
          <p>{intl.formatMessage({ id: "certificacao_ohsas_18001_why_desc" })}</p>
        </div>
      )
    },
    {
      id: "iso22000",
      title: intl.formatMessage({ id: "certificacao_iso_22000_title" }),
      icon: "fas fa-apple-alt",
      content: (
        <div className="text-blueGray-600 text-base space-y-4">
          <p><strong>{intl.formatMessage({ id: "certificacao_iso_22000_highlight" })}</strong></p>
          <p>{intl.formatMessage({ id: "certificacao_iso_22000_desc1" })}</p>
          <p>{intl.formatMessage({ id: "certificacao_iso_22000_desc2" })}</p>
          <p>{intl.formatMessage({ id: "certificacao_iso_22000_desc3" })}</p>
          <ul className="list-disc ml-12 space-y-1">
            <li>{intl.formatMessage({ id: "certificacao_iso_22000_list1" })}</li>
            <li>{intl.formatMessage({ id: "certificacao_iso_22000_list2" })}</li>
            <li>{intl.formatMessage({ id: "certificacao_iso_22000_list3" })}</li>
            <li>{intl.formatMessage({ id: "certificacao_iso_22000_list4" })}</li>
          </ul>
          <p>{intl.formatMessage({ id: "certificacao_iso_22000_desc4" })}</p>
          <p>{intl.formatMessage({ id: "certificacao_iso_22000_desc5" })}</p>
          <h3 className="font-semibold mt-4">{intl.formatMessage({ id: "certificacao_iso_22000_benefits_title" })}</h3>
          <ul className="list-disc ml-12 space-y-1">
            <li>{intl.formatMessage({ id: "certificacao_iso_22000_benefit1" })}</li>
            <li>{intl.formatMessage({ id: "certificacao_iso_22000_benefit2" })}</li>
            <li>{intl.formatMessage({ id: "certificacao_iso_22000_benefit3" })}</li>
            <li>{intl.formatMessage({ id: "certificacao_iso_22000_benefit4" })}</li>
          </ul>
        </div>
      )
    },
    {
      id: "haccp",
      title: intl.formatMessage({ id: "certificacao_haccp_title" }),
      icon: "fas fa-utensils",
      content: (
        <div className="text-blueGray-600 text-base space-y-4">
          <p><strong>{intl.formatMessage({ id: "certificacao_haccp_highlight" })}</strong></p>
          <p>{intl.formatMessage({ id: "certificacao_haccp_desc1" })}</p>
          <p>{intl.formatMessage({ id: "certificacao_haccp_desc2" })}</p>
          <h3 className="font-semibold mt-4">{intl.formatMessage({ id: "certificacao_haccp_benefits_title" })}</h3>
          <ul className="list-disc ml-12 space-y-1">
            <li>{intl.formatMessage({ id: "certificacao_haccp_benefit1" })}</li>
            <li>{intl.formatMessage({ id: "certificacao_haccp_benefit2" })}</li>
            <li>{intl.formatMessage({ id: "certificacao_haccp_benefit3" })}</li>
          </ul>
          <h3 className="font-semibold mt-4">{intl.formatMessage({ id: "certificacao_haccp_principles_title" })}</h3>
          <ul className="list-disc ml-12 space-y-1">
            <li>{intl.formatMessage({ id: "certificacao_haccp_principle1" })}</li>
            <li>{intl.formatMessage({ id: "certificacao_haccp_principle2" })}</li>
            <li>{intl.formatMessage({ id: "certificacao_haccp_principle3" })}</li>
            <li>{intl.formatMessage({ id: "certificacao_haccp_principle4" })}</li>
            <li>{intl.formatMessage({ id: "certificacao_haccp_principle5" })}</li>
            <li>{intl.formatMessage({ id: "certificacao_haccp_principle6" })}</li>
            <li>{intl.formatMessage({ id: "certificacao_haccp_principle7" })}</li>
          </ul>
        </div>
      )
    },
    {
      id: "iso27001",
      title: intl.formatMessage({ id: "certificacao_iso_27001_title" }),
      icon: "fas fa-shield-alt",
      content: (
        <div className="text-blueGray-600 text-base space-y-4">
          <p><strong>{intl.formatMessage({ id: "certificacao_iso_27001_highlight" })}</strong></p>
          <p>{intl.formatMessage({ id: "certificacao_iso_27001_desc1" })}</p>
          <p>{intl.formatMessage({ id: "certificacao_iso_27001_desc2" })}</p>
          <p>{intl.formatMessage({ id: "certificacao_iso_27001_desc3" })}</p>
          <p>{intl.formatMessage({ id: "certificacao_iso_27001_desc4" })}</p>
          <p><strong>{intl.formatMessage({ id: "certificacao_iso_27001_dimensions" })}</strong> {intl.formatMessage({ id: "certificacao_iso_27001_dimensions_desc" })}</p>
          <h3 className="font-semibold mt-4">{intl.formatMessage({ id: "certificacao_iso_27001_benefits_title" })}</h3>
          <ul className="list-disc ml-12 space-y-1">
            <li>{intl.formatMessage({ id: "certificacao_iso_27001_benefit1" })}</li>
            <li>{intl.formatMessage({ id: "certificacao_iso_27001_benefit2" })}</li>
            <li>{intl.formatMessage({ id: "certificacao_iso_27001_benefit3" })}</li>
            <li>{intl.formatMessage({ id: "certificacao_iso_27001_benefit4" })}</li>
            <li>{intl.formatMessage({ id: "certificacao_iso_27001_benefit5" })}</li>
            <li>{intl.formatMessage({ id: "certificacao_iso_27001_benefit6" })}</li>
            <li>{intl.formatMessage({ id: "certificacao_iso_27001_benefit7" })}</li>
          </ul>
        </div>
      )
    },
    {
      id: "iso20000",
      title: intl.formatMessage({ id: "certificacao_iso_20000_title" }),
      icon: "fas fa-network-wired",
      content: (
        <div className="text-blueGray-600 text-base space-y-4">
          <p><strong>{intl.formatMessage({ id: "certificacao_iso_20000_highlight" })}</strong></p>
          <p>{intl.formatMessage({ id: "certificacao_iso_20000_desc1" })}</p>
          <p>{intl.formatMessage({ id: "certificacao_iso_20000_desc2" })}</p>
          <p>{intl.formatMessage({ id: "certificacao_iso_20000_desc3" })}</p>
          <p>{intl.formatMessage({ id: "certificacao_iso_20000_desc4" })}</p>
          <ul className="list-disc ml-12 space-y-1">
            <li>{intl.formatMessage({ id: "certificacao_iso_20000_list1" })}</li>
            <li>{intl.formatMessage({ id: "certificacao_iso_20000_list2" })}</li>
            <li>{intl.formatMessage({ id: "certificacao_iso_20000_list3" })}</li>
            <li>{intl.formatMessage({ id: "certificacao_iso_20000_list4" })}</li>
            <li>{intl.formatMessage({ id: "certificacao_iso_20000_list5" })}</li>
            <li>{intl.formatMessage({ id: "certificacao_iso_20000_list6" })}</li>
            <li>{intl.formatMessage({ id: "certificacao_iso_20000_list7" })}</li>
            <li>{intl.formatMessage({ id: "certificacao_iso_20000_list8" })}</li>
          </ul>
          <h3 className="font-semibold mt-4">{intl.formatMessage({ id: "certificacao_iso_20000_benefits_title" })}</h3>
          <ul className="list-disc ml-12 space-y-1">
            <li>{intl.formatMessage({ id: "certificacao_iso_20000_benefit1" })}</li>
            <li>{intl.formatMessage({ id: "certificacao_iso_20000_benefit2" })}</li>
            <li>{intl.formatMessage({ id: "certificacao_iso_20000_benefit3" })}</li>
            <li>{intl.formatMessage({ id: "certificacao_iso_20000_benefit4" })}</li>
            <li>{intl.formatMessage({ id: "certificacao_iso_20000_benefit5" })}</li>
            <li>{intl.formatMessage({ id: "certificacao_iso_20000_benefit6" })}</li>
            <li>{intl.formatMessage({ id: "certificacao_iso_20000_benefit7" })}</li>
            <li>{intl.formatMessage({ id: "certificacao_iso_20000_benefit8" })}</li>
            <li>{intl.formatMessage({ id: "certificacao_iso_20000_benefit9" })}</li>
            <li>{intl.formatMessage({ id: "certificacao_iso_20000_benefit10" })}</li>
          </ul>
        </div>
      )
    },
    {
      id: "iso13485",
      title: intl.formatMessage({ id: "certificacao_iso_13485_title" }),
      icon: "fas fa-stethoscope",
      content: (
        <div className="text-blueGray-600 text-base space-y-4">
          <p><strong>{intl.formatMessage({ id: "certificacao_iso_13485_highlight" })}</strong></p>
          <p>{intl.formatMessage({ id: "certificacao_iso_13485_desc1" })}</p>
          <p>{intl.formatMessage({ id: "certificacao_iso_13485_desc2" })}</p>
          <p>{intl.formatMessage({ id: "certificacao_iso_13485_desc3" })}</p>
          <p>{intl.formatMessage({ id: "certificacao_iso_13485_desc4" })}</p>
          <p>{intl.formatMessage({ id: "certificacao_iso_13485_desc5" })}</p>
          <h3 className="font-semibold mt-4">{intl.formatMessage({ id: "certificacao_iso_13485_benefits_title" })}</h3>
          <ul className="list-disc ml-12 space-y-1">
            <li>{intl.formatMessage({ id: "certificacao_iso_13485_benefit1" })}</li>
            <li>{intl.formatMessage({ id: "certificacao_iso_13485_benefit2" })}</li>
            <li>{intl.formatMessage({ id: "certificacao_iso_13485_benefit3" })}</li>
            <li>{intl.formatMessage({ id: "certificacao_iso_13485_benefit4" })}</li>
            <li>{intl.formatMessage({ id: "certificacao_iso_13485_benefit5" })}</li>
          </ul>
        </div>
      )
    },
    {
      id: "iso29001",
      title: intl.formatMessage({ id: "certificacao_iso_29001_title" }),
      icon: "fas fa-industry",
      content: (
        <div className="text-blueGray-600 text-base space-y-4">
          <p><strong>{intl.formatMessage({ id: "certificacao_iso_29001_highlight" })}</strong></p>
          <p>{intl.formatMessage({ id: "certificacao_iso_29001_desc1" })}</p>
          <p>{intl.formatMessage({ id: "certificacao_iso_29001_desc2" })}</p>
          <p>{intl.formatMessage({ id: "certificacao_iso_29001_desc3" })}</p>
          <p>{intl.formatMessage({ id: "certificacao_iso_29001_desc4" })}</p>
          <p>{intl.formatMessage({ id: "certificacao_iso_29001_desc5" })}</p>
          <h3 className="font-semibold mt-4">{intl.formatMessage({ id: "certificacao_iso_29001_benefits_title" })}</h3>
          <ul className="list-disc ml-12 space-y-1">
            <li>{intl.formatMessage({ id: "certificacao_iso_29001_benefit1" })}</li>
            <li>{intl.formatMessage({ id: "certificacao_iso_29001_benefit2" })}</li>
            <li>{intl.formatMessage({ id: "certificacao_iso_29001_benefit3" })}</li>
            <li>{intl.formatMessage({ id: "certificacao_iso_29001_benefit4" })}</li>
            <li>{intl.formatMessage({ id: "certificacao_iso_29001_benefit5" })}</li>
          </ul>
        </div>
      )
    },
    {
      id: "iso22716",
      title: intl.formatMessage({ id: "certificacao_iso_22716_title" }),
      icon: "fas fa-flask",
      content: (
        <div className="text-blueGray-600 text-base space-y-4">
          <p><strong>{intl.formatMessage({ id: "certificacao_iso_22716_highlight" })}</strong></p>
          <p>{intl.formatMessage({ id: "certificacao_iso_22716_desc1" })}</p>
          <p>{intl.formatMessage({ id: "certificacao_iso_22716_desc2" })}</p>
          <p>{intl.formatMessage({ id: "certificacao_iso_22716_desc3" })}</p>
          <h3 className="font-semibold mt-4">{intl.formatMessage({ id: "certificacao_iso_22716_benefits_title" })}</h3>
          <ul className="list-disc ml-12 space-y-1">
            <li>{intl.formatMessage({ id: "certificacao_iso_22716_benefit1" })}</li>
            <li>{intl.formatMessage({ id: "certificacao_iso_22716_benefit2" })}</li>
            <li>{intl.formatMessage({ id: "certificacao_iso_22716_benefit3" })}</li>
            <li>{intl.formatMessage({ id: "certificacao_iso_22716_benefit4" })}</li>
            <li>{intl.formatMessage({ id: "certificacao_iso_22716_benefit5" })}</li>
          </ul>
        </div>
      )
    },
    {
      id: "iso50001",
      title: intl.formatMessage({ id: "certificacao_iso_50001_title" }),
      icon: "fas fa-bolt",
      content: (
        <div className="text-blueGray-600 text-base space-y-4">
          <p><strong>{intl.formatMessage({ id: "certificacao_iso_50001_highlight" })}</strong></p>
          <p>{intl.formatMessage({ id: "certificacao_iso_50001_desc1" })}</p>
          <p>{intl.formatMessage({ id: "certificacao_iso_50001_desc2" })}</p>
          <p>{intl.formatMessage({ id: "certificacao_iso_50001_desc3" })}</p>
          <h3 className="font-semibold mt-4">{intl.formatMessage({ id: "certificacao_iso_50001_benefits_title" })}</h3>
          <ul className="list-disc ml-12 space-y-1">
            <li>{intl.formatMessage({ id: "certificacao_iso_50001_benefit1" })}</li>
            <li>{intl.formatMessage({ id: "certificacao_iso_50001_benefit2" })}</li>
            <li>{intl.formatMessage({ id: "certificacao_iso_50001_benefit3" })}</li>
            <li>{intl.formatMessage({ id: "certificacao_iso_50001_benefit4" })}</li>
            <li>{intl.formatMessage({ id: "certificacao_iso_50001_benefit5" })}</li>
          </ul>
        </div>
      )
    },
    {
      id: "iso10002",
      title: intl.formatMessage({ id: "certificacao_iso_10002_title" }),
      icon: "fas fa-comments",
      content: (
        <div className="text-blueGray-600 text-base space-y-4">
          <p><strong>{intl.formatMessage({ id: "certificacao_iso_10002_highlight" })}</strong></p>
          <p>{intl.formatMessage({ id: "certificacao_iso_10002_desc1" })}</p>
          <p>{intl.formatMessage({ id: "certificacao_iso_10002_desc2" })}</p>
          <p>{intl.formatMessage({ id: "certificacao_iso_10002_desc3" })}</p>
          <ul className="list-disc ml-12 space-y-1">
            <li>{intl.formatMessage({ id: "certificacao_iso_10002_list1" })}</li>
            <li>{intl.formatMessage({ id: "certificacao_iso_10002_list2" })}</li>
            <li>{intl.formatMessage({ id: "certificacao_iso_10002_list3" })}</li>
            <li>{intl.formatMessage({ id: "certificacao_iso_10002_list4" })}</li>
            <li>{intl.formatMessage({ id: "certificacao_iso_10002_list5" })}</li>
            <li>{intl.formatMessage({ id: "certificacao_iso_10002_list6" })}</li>
            <li>{intl.formatMessage({ id: "certificacao_iso_10002_list7" })}</li>
          </ul>
          <h3 className="font-semibold mt-4">{intl.formatMessage({ id: "certificacao_iso_10002_benefits_title" })}</h3>
          <ul className="list-disc ml-12 space-y-1">
            <li>{intl.formatMessage({ id: "certificacao_iso_10002_benefit1" })}</li>
            <li>{intl.formatMessage({ id: "certificacao_iso_10002_benefit2" })}</li>
            <li>{intl.formatMessage({ id: "certificacao_iso_10002_benefit3" })}</li>
            <li>{intl.formatMessage({ id: "certificacao_iso_10002_benefit4" })}</li>
            <li>{intl.formatMessage({ id: "certificacao_iso_10002_benefit5" })}</li>
          </ul>
        </div>
      )
    }
  ];

  return (
    <>
      <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75">
        <div
          className="absolute top-0 w-full h-full bg-center bg-cover"
          style={{ backgroundImage: `url(${contactosFundo})` }}
        >
          <span id="blackOverlay" className="w-full h-full absolute opacity-75 bg-black"></span>
        </div>
        <div className="container relative mx-auto">
          <div className="flex flex-wrap items-center justify-center">
            <div className="w-full px-4 text-center">
              <div className="pr-12">
                <h1 className="text-white font-semibold text-5xl">
                  {intl.formatMessage({ id: "certificacao_iso_title" })}
                </h1>
                <p className="mt-4 text-lg text-gray-300 max-w-3xl mx-auto">
                  {intl.formatMessage({ id: "certificacao_iso_subtitle" })}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-16"
          style={{ transform: "translateZ(0)" }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="text-gray-300 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
      </div>
      <section className="pb-20 bg-white pt-0">
        <div className="container mx-auto px-4">
          <div className="flex flex-col mt-8 space-y-8">
            {isos.map((iso) => (
              <div id={iso.id} key={iso.id} className="w-full max-w-6xl mx-auto bg-gradient-to-br from-white via-white to-white rounded-2xl p-0 mb-6 shadow-lg border border-white transition-all duration-300">
                <button
                  className="flex items-center w-full px-6 py-5 bg-white rounded-xl border border-maea-blue shadow-sm hover:shadow-md transition-all duration-200 focus:outline-none text-left group"
                  onClick={() => setOpenISO(openISO === iso.id ? null : iso.id)}
                  aria-expanded={openISO === iso.id}
                >
                  <span className="flex items-center justify-center w-10 h-10 rounded-lg bg-maea-blue text-white text-2xl mr-4">
                    <i className={iso.icon}></i>
                  </span>
                  <span className="font-bold text-lg text-blueGray-800 flex-1">{iso.title}</span>
                  <span className="flex items-center justify-center w-10 h-10 rounded-lg bg-maea-blue text-white text-2xl ml-4 transition-all duration-200"> <i className={openISO === iso.id ? 'fas fa-minus' : 'fas fa-plus'}></i> </span>
                </button>
                {openISO === iso.id && (
                  <div className="px-8 pb-8 pt-2 animate-fade-in">
                    <div className="text-blueGray-600 text-base space-y-4">
                      {iso.content}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}