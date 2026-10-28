import './App.css'

function App() {
  return (
    <>
      <a className="skip-link" href="#main">본문으로 바로가기</a>
      <header className="site-header">
        <div className="header-inner">
          <a className="wordmark" href="#home" aria-label="dltjdcks 홈">
            <span className="brand-symbol" aria-hidden="true">✳</span> dltjdcks<span className="brand-dot">.</span>
          </a>
          <nav aria-label="페이지 메뉴">
            <a href="#interests">관심사</a>
            <a href="#skills">잘하는 것</a>
            <a href="#works">작품</a>
            <a href="#goals">목표</a>
          </nav>
        </div>
      </header>
      <main id="main" tabIndex={-1}>
        <section className="intro-hero page-width" id="home" aria-labelledby="intro-title">
          <div className="intro-copy">
            <p className="eyebrow"><span className="status-dot" /> MY INTRODUCTION</p>
            <h1 id="intro-title">안녕하세요,<br /><span className="intro-name">dltjdcks</span>입니다<span className="intro-period">.</span></h1>
            <p className="intro-lead">친구들과 함께 만드는 것을 좋아해요.</p>
            <p className="intro-description">그림과 디자인에 관심이 있고,<br />아이디어를 그림으로 표현하는 것을 좋아합니다.</p>
            <a className="button button-primary" href="#interests">저를 더 알아보기 <span aria-hidden="true">↓</span></a>
          </div>
          <div className="intro-art" aria-hidden="true">
            <div className="intro-art-orbit" />
            <div className="intro-art-card">
              <span className="intro-art-spark">✳</span>
              <span className="intro-art-caption">IDEAS, TOGETHER</span>
              <div className="intro-art-shapes"><i /><i /><i /></div>
              <span className="intro-art-label">dltjdcks</span>
            </div>
            <span className="intro-art-dot intro-art-dot-one" />
            <span className="intro-art-dot intro-art-dot-two" />
          </div>
        </section>

        <section className="profile-section page-width" id="interests" aria-labelledby="interests-title">
          <div className="profile-section-heading">
            <p className="eyebrow">01 / WHAT I LIKE</p>
            <h2 id="interests-title">관심사와 취미<span>.</span></h2>
          </div>
          <div className="profile-card interest-card">
            <span className="profile-card-icon" aria-hidden="true">✳</span>
            <div>
              <h3>그림과 디자인</h3>
              <p>그림과 디자인에 관심이 있어요.</p>
            </div>
          </div>
        </section>

        <section className="profile-section profile-section-tinted" id="skills" aria-labelledby="skills-title">
          <div className="page-width">
            <div className="profile-section-heading">
              <p className="eyebrow">02 / LEARNING JOURNEY</p>
              <h2 id="skills-title">잘하는 것과 배우고 싶은 것<span>.</span></h2>
            </div>
            <div className="profile-card-grid">
              <article className="profile-card skill-card">
                <span className="profile-card-label">잘하는 것</span>
                <h3>아이디어를 그림으로 표현하기</h3>
                <p>떠오른 아이디어를 그림으로 표현해요.</p>
              </article>
              <article className="profile-card skill-card">
                <span className="profile-card-label">배우고 싶은 것</span>
                <h3>디지털 드로잉</h3>
                <p>디지털 드로잉을 배워 보고 싶어요.</p>
              </article>
            </div>
          </div>
        </section>

        <section className="profile-section page-width" id="works" aria-labelledby="works-title">
          <div className="profile-section-heading">
            <p className="eyebrow">03 / THINGS I HAVE MADE</p>
            <h2 id="works-title">활동과 작품<span>.</span></h2>
            <p className="section-description">소개할 작품이 생기면 이곳에 추가할게요.</p>
          </div>
          <div className="work-placeholder">
            <span className="work-placeholder-mark" aria-hidden="true">＋</span>
            <p>작품을 여기에 추가할 수 있어요</p>
          </div>
        </section>

        <section className="goal-section" id="goals" aria-labelledby="goals-title">
          <div className="page-width goal-inner">
            <div>
              <p className="eyebrow">04 / LOOKING AHEAD</p>
              <h2 id="goals-title">앞으로의 목표<span>.</span></h2>
              <p>친구들과 함께 작품을 만들고 싶어요.</p>
            </div>
            <span className="goal-mark" aria-hidden="true">함께<br />만들기</span>
          </div>
        </section>
      </main>
      <footer className="site-footer page-width">
        <a className="wordmark" href="#home">dltjdcks<span className="brand-dot">.</span></a>
        <p>소개를 읽어 주셔서 고맙습니다.</p>
        <a className="back-top" href="#home">처음으로 <span aria-hidden="true">↑</span></a>
      </footer>
    </>
  )
}

export default App
