import "./../styles/header.css";

const Header = () => {
    /* Personal */
    const abrahamPictureUrl = "REDACTED_FOR_PRIVACY";
    const abrahamSiteUrl = "REDACTED_FOR_PRIVACY";
    const abrahamSiteDomain = "REDACTED_FOR_PRIVACY";
    /* Icons */
    const envelopeIconUrl = "REDACTED_FOR_PRIVACY";
    const linkedInIconUrl = "REDACTED_FOR_PRIVACY";
    /* Social */
    const email = "REDACTED_FOR_PRIVACY";
    const linkedInProfileUrl = "REDACTED_FOR_PRIVACY";

    const handleEmailClick = () => {
        window.open(`mailto:${email}`, "_blank");
    };

    const handleLinkedInClick = () => {
        window.open(linkedInProfileUrl, "_blank");
    };

    return (
        <div className="header-container">
            <img
                src={abrahamPictureUrl}
                alt="Picture of Abraham"
                className="abraham-picture"
            />
            <h1>Abraham Ras</h1>
            <h3>Full Stack Developer / Cybersecurity Analyst</h3>
            <a href={abrahamSiteUrl}>{abrahamSiteDomain}</a>
            <div className="contact-buttons">
                <button type="button" onClick={handleEmailClick}>
                    <img src={envelopeIconUrl} alt="Envelope Icon" />
                    Email
                </button>
                <button type="button" onClick={handleLinkedInClick}>
                    <img src={linkedInIconUrl} alt="LinkedIn Icon" />
                    LinkedIn
                </button>
            </div>
        </div>
    );
};

export default Header;
