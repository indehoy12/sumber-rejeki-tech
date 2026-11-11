import { useRef, useState } from 'react';
import Seo from '../components/Seo';
import PageHeader from '../components/PageHeader';
import { useLanguage } from '../hooks/useLanguage';
import { SITE, formServiceConfigured, waLink } from '../config/site';

const inputCls =
  'w-full px-4 py-3 bg-white border border-brand-border rounded-md focus:outline-none focus:border-brand-navy focus:ring-2 focus:ring-brand-navy/10 transition-colors';

const Field = ({ id, label, optional, optionalText, children }) => (
  <div>
    <label htmlFor={id} className="block text-sm font-medium text-brand-text mb-2">
      {label}
      {optional && <span className="ml-1 font-normal text-brand-muted">({optionalText})</span>}
    </label>
    {children}
  </div>
);

const Contact = () => {
  const { t } = useLanguage();
  const c = t.contactPage;
  const form = useRef(null);
  const [status, setStatus] = useState('idle'); // idle | sending | success | error
  const [errorMsg, setErrorMsg] = useState('');

  const buildWaMessage = (data) =>
    [
      c.waIntro,
      '',
      `${c.waName}: ${data.from_name}`,
      data.company && `${c.waCompany}: ${data.company}`,
      `${c.waEmail}: ${data.from_email}`,
      `${c.waPhone}: ${data.phone}`,
      '',
      `${c.waMessage}: ${data.message}`,
    ]
      .filter((line) => line !== false && line !== undefined)
      .join('\n');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const el = form.current;
    const data = Object.fromEntries(new FormData(el).entries());

    // Honeypot: bot mengisi kolom tersembunyi ini
    if (data.website) {
      setStatus('success');
      return;
    }

    setStatus('sending');

    // Jika access key Web3Forms belum diisi, arahkan pesan ke WhatsApp
    if (!formServiceConfigured) {
      window.open(waLink(buildWaMessage(data)), '_blank', 'noopener,noreferrer');
      el.reset();
      setStatus('success');
      return;
    }

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: SITE.web3formsKey,
          subject: `Pesan baru dari website ${SITE.name}`,
          from_name: SITE.name,
          name: data.from_name,
          email: data.from_email,
          phone: data.phone,
          company: data.company || '-',
          message: data.message,
        }),
      });
      const result = await res.json();
      if (!res.ok || !result.success) throw new Error(result.message || 'Gagal mengirim');
      el.reset();
      setStatus('success');
    } catch (err) {
      console.error('Web3Forms error:', err);
      setErrorMsg(err?.message || String(err));
      setStatus('error');
    }
  };

  return (
    <div className="py-12 sm:py-16 bg-brand-soft">
      <Seo title={c.title} description={c.desc} />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <PageHeader title={c.title} desc={c.desc} />

        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8 items-start">
          <div className="lg:col-span-2 bg-white p-6 sm:p-8 md:p-10 rounded-lg shadow-sm border border-brand-border">
            {status === 'success' ? (
              <div className="text-center py-10 sm:py-12" role="status">
                <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-green-100 text-green-700" aria-hidden="true">
                  <svg className="h-7 w-7" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M16.7 5.3a1 1 0 010 1.4l-7.5 7.5a1 1 0 01-1.4 0L3.3 9.7a1 1 0 011.4-1.4l3.8 3.8 6.8-6.8a1 1 0 011.4 0z" clipRule="evenodd" /></svg>
                </div>
                <h2 className="text-2xl font-bold text-brand-navy mb-2">{c.successTitle}</h2>
                <p className="text-brand-muted mb-6">{c.successDesc}</p>
                <button type="button" onClick={() => setStatus('idle')} className="text-brand-orange font-medium hover:underline">{c.btnAnother}</button>
              </div>
            ) : (
              <form ref={form} onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <Field id="from_name" label={c.name}>
                    <input required id="from_name" type="text" name="from_name" autoComplete="name" className={inputCls} placeholder={c.phName} />
                  </Field>
                  <Field id="company" label={c.company} optional optionalText={c.optional}>
                    <input id="company" type="text" name="company" autoComplete="organization" className={inputCls} placeholder={c.phCompany} />
                  </Field>
                  <Field id="from_email" label={c.email}>
                    <input required id="from_email" type="email" name="from_email" autoComplete="email" className={inputCls} placeholder={c.phEmail} />
                  </Field>
                  <Field id="phone" label={c.phone}>
                    <input required id="phone" type="tel" name="phone" autoComplete="tel" inputMode="tel" pattern="[0-9+\-\s\(\)]{8,20}" className={inputCls} placeholder={c.phPhone} />
                  </Field>
                </div>
                <Field id="message" label={c.message}>
                  <textarea required id="message" rows="5" name="message" minLength={10} className={inputCls} placeholder={c.phMessage} />
                </Field>

                {/* Honeypot anti-spam (tersembunyi) */}
                <div className="hidden" aria-hidden="true">
                  <label>Website<input type="text" name="website" tabIndex={-1} autoComplete="off" /></label>
                </div>

                {status === 'error' && (
                  <div role="alert" className="rounded-md border border-red-200 bg-red-50 p-4 text-sm text-red-800">
                    <p className="font-semibold">{c.errorTitle}</p>
                    <p>{c.errorDesc}</p>
                    {errorMsg && <p className="mt-2 font-mono text-xs break-all">{errorMsg}</p>}
                  </div>
                )}
                {!formServiceConfigured && (
                  <p className="text-xs text-brand-muted">{c.waFallbackNote}</p>
                )}

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full px-6 py-4 text-white font-semibold rounded-md transition-colors bg-brand-navy hover:bg-brand-navy_light disabled:bg-gray-400 disabled:cursor-not-allowed"
                >
                  {status === 'sending' ? c.sending : c.btnSubmit}
                </button>
              </form>
            )}
          </div>

          <aside className="bg-white p-6 sm:p-8 rounded-lg shadow-sm border border-brand-border">
            <h2 className="text-lg font-semibold text-brand-navy mb-5">{c.infoTitle}</h2>
            <ul className="space-y-5 text-sm">
              <li>
                <span className="block text-brand-muted mb-1">{c.infoWa}</span>
                <a href={waLink(c.waIntro)} target="_blank" rel="noopener noreferrer" className="font-medium text-brand-navy hover:text-brand-orange transition-colors">{SITE.phoneDisplay}</a>
              </li>
              <li>
                <span className="block text-brand-muted mb-1">{c.infoEmail}</span>
                <a href={`mailto:${SITE.email}`} className="font-medium text-brand-navy hover:text-brand-orange transition-colors break-all">{SITE.email}</a>
              </li>
            </ul>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default Contact;
