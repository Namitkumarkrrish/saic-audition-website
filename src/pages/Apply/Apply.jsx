import React, { useState } from 'react';
import styles from './Apply.module.css';


const Apply = () => {
  const [gender, setGender] = useState('');
  const [prefs, setPrefs] = useState([]);
  const [formData, setFormData] = useState({
    fullName: '',
    year: '1st Year',
    regNumber: '',
    rollNumber: '',
    department: '',
    whatsapp: '',
    rate_time: 5,
    rate_comm: 5,
    rate_net: 5,
    rate_prob: 5,
    rate_lead: 5,
    whyJoin: '',
    whyYou: '',
    hobby: '',
    favShow: ''
  });
  const [showModal, setShowModal] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const toggleGender = (selection) => {
    setGender(selection);
  };

  const selectDomain = (name, icon) => {
    if (prefs.length >= 3 || prefs.some(p => p.name === name)) return;
    setPrefs([...prefs, { name, icon }]);
  };

  const resetDomains = () => {
    setPrefs([]);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate WhatsApp
    if (formData.whatsapp.length !== 10) {
      alert("WhatsApp number must be exactly 10 digits.");
      return;
    }

    // Validate Domains
    if (prefs.length !== 3) {
      alert("Please select exactly 3 domains.");
      return;
    }

    // Validate Gender
    if (!gender) {
      alert("Please select an avatar.");
      return;
    }

    setIsSubmitting(true);

    const submitData = new FormData();
    Object.keys(formData).forEach(key => {
      submitData.append(key, formData[key]);
    });
    submitData.append('gender', gender);
    submitData.append('pref1', prefs[0]?.name || '');
    submitData.append('pref2', prefs[1]?.name || '');
    submitData.append('pref3', prefs[2]?.name || '');

    const scriptURL = 'https://script.google.com/macros/s/AKfycbwNciDLsrm7r7weFcDuoxLzoS9rH-N8l0P2wYSHkIO_bJqj54Ox1en53l05ACSon1I/exec';

    try {
      await fetch(scriptURL, { method: 'POST', body: submitData });
      setShowModal(true);
    } catch (err) {
      alert("Error submitting form. Please check connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const domains = [
    { name: 'Editing', icon: 'movie_creation', label: 'Video Editing' },
    { name: 'Graphics', icon: 'palette', label: 'Graphics Designing' },
    { name: 'Content', icon: 'edit_note', label: 'Content Writing' },
    { name: 'WebDev', icon: 'code', label: 'Web Dev' },
    { name: 'Photo', icon: 'camera_alt', label: 'Photo & Video' },
    { name: 'Events', icon: 'celebration', label: 'Events & Anchoring' }
  ];

  return (
    <div className={styles.pageWrapper}>
      {/* Lava Background */}
      <div className={styles.lavaBg}>
        <div className={styles.blob}></div>
        <div className={styles.blob}></div>
        <div className={styles.blob}></div>
        <div className={styles.blob}></div>
        <div className={styles.blob}></div>
      </div>


      {/* Main Form Container */}
      <div className={styles.mainContainer}>
        <form className={styles.auditionForm} onSubmit={handleSubmit}>
          
          {/* Personal Info */}
          <div className={styles.glassBox}>
            <div className={styles.boxTitle}>
              <i className="material-icons-round">badge</i> Personal Info
            </div>
            
            <label style={{ textAlign: 'center', marginBottom: '20px', fontSize: '1.1rem', color: 'var(--gold)', display: 'block' }}>
              Select Avatar
            </label>
            <div className={styles.genderRow}>
              <div
                className={`${styles.genderOption} ${styles.boy} ${gender === 'Boy' ? styles.active : ''}`}
                onClick={() => toggleGender('Boy')}
              >
                <i className="material-icons-round">face_6</i>
              </div>
              <div
                className={`${styles.genderOption} ${styles.girl} ${gender === 'Girl' ? styles.active : ''}`}
                onClick={() => toggleGender('Girl')}
              >
                <i className="material-icons-round">face_3</i>
              </div>
            </div>

            <div className={styles.inputGroup}>
              <label>Full Name *</label>
              <input
                type="text"
                name="fullName"
                required
                placeholder="Enter your full name"
                value={formData.fullName}
                onChange={handleInputChange}
              />
            </div>

            <div className={styles.inputGroup}>
              <label>Year of Study *</label>
              <div className={styles.yearSelectorContainer}>
                <input
                  type="radio"
                  id="year1"
                  name="year"
                  value="1st Year"
                  checked={formData.year === '1st Year'}
                  onChange={handleInputChange}
                />
                <label htmlFor="year1">1st Year</label>
                
                <input
                  type="radio"
                  id="year2"
                  name="year"
                  value="2nd Year"
                  checked={formData.year === '2nd Year'}
                  onChange={handleInputChange}
                />
                <label htmlFor="year2">2nd Year</label>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
              <div className={styles.inputGroup}>
                <label>Reg Number *</label>
                <input
                  type="text"
                  name="regNumber"
                  required
                  value={formData.regNumber}
                  onChange={handleInputChange}
                />
              </div>
              <div className={styles.inputGroup}>
                <label>Roll Number *</label>
                <input
                  type="text"
                  name="rollNumber"
                  required
                  value={formData.rollNumber}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <div className={styles.inputGroup}>
              <label>Department *</label>
              <input
                type="text"
                name="department"
                required
                placeholder="Enter your department"
                value={formData.department}
                onChange={handleInputChange}
              />
            </div>

            <div className={styles.inputGroup}>
              <label>WhatsApp Number *</label>
              <input
                type="number"
                name="whatsapp"
                required
                placeholder="9876543210"
                value={formData.whatsapp}
                onChange={handleInputChange}
              />
            </div>
          </div>

          {/* Domains */}
          <div className={styles.glassBox}>
            <div className={styles.resetBtn} onClick={resetDomains}>
              <span className="material-icons-round">restart_alt</span> Reset
            </div>
            <div className={styles.boxTitle}>
              <i className="material-icons-round">category</i> Domains
            </div>

            <p className={styles.domainInstruction}>Select exactly 3 in order of Preference.</p>

            <div className={styles.prefDisplay}>
              {[0, 1, 2].map((i) => (
                <div
                  key={i}
                  className={`${styles.prefBox} ${prefs[i] ? styles[`filled${i + 1}`] : ''}`}
                >
                  {prefs[i] ? (
                    <>
                      <i className="material-icons-round" style={{ fontSize: '2rem' }}>
                        {prefs[i].icon}
                      </i>
                      <span style={{ fontSize: '0.8rem', marginTop: '5px' }}>
                        {prefs[i].name}
                      </span>
                    </>
                  ) : (
                    <span style={{ opacity: 0.3, fontSize: '1.2rem' }}>{i + 1}</span>
                  )}
                </div>
              ))}
            </div>

            <div className={styles.domainGrid}>
              {domains.map((domain) => (
                <div
                  key={domain.name}
                  className={`${styles.domainCard} ${prefs.some(p => p.name === domain.name) ? styles.disabled : ''}`}
                  onClick={() => selectDomain(domain.name, domain.icon)}
                >
                  <i className="material-icons-round">{domain.icon}</i>
                  <span>{domain.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Self-Audit */}
          <div className={styles.glassBox}>
            <div className={styles.boxTitle} style={{ justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <i className="material-icons-round">military_tech</i> The Self-Audit
              </div>
              <i className="material-icons-round" style={{ opacity: 0.3, fontSize: '2.2rem' }}>
                trending_up
              </i>
            </div>

            {[
              { name: 'rate_time', label: 'Time Management' },
              { name: 'rate_comm', label: 'Communication' },
              { name: 'rate_net', label: 'Networking' },
              { name: 'rate_prob', label: 'Problem Solving' },
              { name: 'rate_lead', label: 'Leadership' }
            ].map((skill) => (
              <div key={skill.name} className={styles.sliderRow}>
                <div className={styles.sliderTop}>
                  <label>{skill.label}</label>
                  <span className={styles.valDisp}>{formData[skill.name]}</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="10"
                  name={skill.name}
                  value={formData[skill.name]}
                  onChange={handleInputChange}
                />
              </div>
            ))}
          </div>

          {/* Interview */}
          <div className={styles.glassBox}>
            <div className={styles.boxTitle}>
              <i className="material-icons-round">forum</i> The Interview
            </div>

            <div className={styles.inputGroup}>
              <label>Why do you want to join SAIC? *</label>
              <textarea
                name="whyJoin"
                rows="4"
                required
                placeholder="Tell us your motivation..."
                value={formData.whyJoin}
                onChange={handleInputChange}
              />
            </div>

            <div className={styles.inputGroup}>
              <label>Why should SAIC choose you? *</label>
              <textarea
                name="whyYou"
                rows="4"
                required
                placeholder="What are your strengths..."
                value={formData.whyYou}
                onChange={handleInputChange}
              />
            </div>

            <div className={styles.inputGroup}>
              <label>What are your Hobbies? (Optional)</label>
              <input
                type="text"
                name="hobby"
                placeholder="e.g., Reading, Gaming..."
                value={formData.hobby}
                onChange={handleInputChange}
              />
            </div>

            <div className={styles.inputGroup}>
              <label>Tell us your Favourite Movie/Anime/TV Show (Optional)</label>
              <input
                type="text"
                name="favShow"
                placeholder="Your top picks..."
                value={formData.favShow}
                onChange={handleInputChange}
              />
            </div>

            <button type="submit" className={styles.submitBtn} disabled={isSubmitting}>
              {isSubmitting ? 'Sending...' : 'Submit Application'}
            </button>
          </div>
        </form>
      </div>

      {/* Success Modal */}
      <div className={`${styles.successModal} ${showModal ? styles.show : ''}`}>
        <div className={styles.modalContent}>
          <i
            className="material-icons-round"
            style={{ fontSize: '5rem', color: 'var(--gold)', marginBottom: '25px' }}
          >
            verified
          </i>
          <h2 style={{ color: 'var(--gold)', marginBottom: '15px', fontSize: '1.8rem' }}>
            Application Sent!
          </h2>
          <p style={{ color: 'var(--text-muted)', marginBottom: '30px', fontSize: '1.1rem' }}>
            Your Application for SAIC 2K26 has been submitted. Best of luck for your Auditions.
          </p>
          <button
            className={styles.submitBtn}
            onClick={() => window.location.reload()}
            style={{ marginTop: 0 }}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Apply;