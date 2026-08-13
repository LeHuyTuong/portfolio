import { Link } from 'react-router-dom';

/**
 * Segmented switcher between the tailored CV variants.
 * Screen-only — hidden in print so it never lands in the PDF.
 * Add a new entry here when a new variant route is added in App.jsx.
 */
const RESUME_VARIANTS = [
    { key: 'junior', label: 'Junior', path: '/resume' },
    { key: 'fresher', label: 'Fresher', path: '/resume/fresher' },
];

const ResumeVariantTabs = ({ active }) => (
    <div className="resume-variants" role="group" aria-label="Resume version">
        {RESUME_VARIANTS.map(v => (
            <Link
                key={v.key}
                to={v.path}
                className={`variant-tab${v.key === active ? ' is-active' : ''}`}
                aria-current={v.key === active ? 'page' : undefined}
            >
                {v.label}
            </Link>
        ))}
    </div>
);

export default ResumeVariantTabs;
