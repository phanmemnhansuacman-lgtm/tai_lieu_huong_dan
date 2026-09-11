import {useState, useEffect} from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import BannerChaomung from '@site/src/components/BannerChaomung';

// ---- Icon SVG dùng chung, thay cho emoji ----
const Icons = {
  thuongmai: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 3h2l2.4 12.4a2 2 0 0 0 2 1.6h8.4a2 2 0 0 0 2-1.6L22 6H6" />
      <circle cx="9" cy="20" r="1" />
      <circle cx="18" cy="20" r="1" />
    </svg>
  ),
  sanxuat: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1-1.6 1.7 1.7 0 0 0-1.9.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.9 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1 1.7 1.7 0 0 0-.3-1.9l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.9.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.9-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.9V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1Z" />
    </svg>
  ),
  xaydung: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 21h18M5 21V7l7-4 7 4v14M9 21v-6h6v6M9 12h.01M15 12h.01M9 9h.01M15 9h.01" />
    </svg>
  ),
  dichvu: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 11c1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3 1.34 3 3 3ZM8 11c1.66 0 3-1.34 3-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3Zm0 2c-2.67 0-8 1.34-8 4v2h9.5M16 13c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h7v-2c0-2.66-5.33-4-8-4Z" />
    </svg>
  ),
  book: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4.5A2.5 2.5 0 0 1 6.5 2H20v17H6.5A2.5 2.5 0 0 0 4 21.5V4.5Z" />
      <path d="M20 19H6.5A2.5 2.5 0 0 0 4 21.5" />
    </svg>
  ),
  chart: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 20V10M12 20V4M20 20v-7" />
    </svg>
  ),
};

const docTypes = [
  {
    index: '01',
    icon: Icons.thuongmai,
    title: 'Thương mại',
    desc: 'Mua bán hàng hóa, quản lý kho, chiết khấu, hóa đơn đầu vào — đầu ra theo đúng nghiệp vụ thương mại.',
    href: '/docs/doanh_nghiep_thuong_mai/phan-1-thiet-lap-chung/1.1-cai-dat-va-cac-thiet-lap-can-ban/1.1.1-cai-dat-chuong-trinh-phan-mem-acman-9.1',
  },
  {
    index: '02',
    icon: Icons.sanxuat,
    title: 'Sản xuất',
    desc: 'Giá thành sản phẩm, định mức nguyên vật liệu, chi phí sản xuất dở dang và nhập kho thành phẩm.',
    href: '/coming-soon?muc=Sản xuất',
    comingSoon: true,
  },
  {
    index: '03',
    icon: Icons.xaydung,
    title: 'Xây dựng',
    desc: 'Hạch toán theo công trình, chi phí dở dang xây lắp, nghiệm thu và quyết toán từng hạng mục.',
    href: '/coming-soon?muc=Xây dựng',
  },
  {
    index: '04',
    icon: Icons.dichvu,
    title: 'Dịch vụ',
    desc: 'Ghi nhận doanh thu cung cấp dịch vụ, hợp đồng, tiến độ thực hiện và chi phí trực tiếp.',
    href: '/docs/doanh_nghiep_dich_vu/phan-1-thiet-lap-chung/1.1-cai-dat-va-cac-thiet-lap-can-ban/1.1.1-cai-dat-chuong-trinh-phan-mem-acman-9.1',
  },
];

const TYPEWRITER_TEXT = 'Chúc bạn trải nghiệm tốt với PM ACMan';

function useTypewriter(text, {typingSpeed = 70, deletingSpeed = 35, pauseAfterType = 1400, pauseAfterDelete = 500} = {}) {
  const [displayed, setDisplayed] = useState('');

  useEffect(() => {
    let charIndex = 0;
    let isDeleting = false;
    let timeoutId;

    function tick() {
      if (!isDeleting) {
        charIndex += 1;
        setDisplayed(text.slice(0, charIndex));

        if (charIndex === text.length) {
          timeoutId = setTimeout(() => {
            isDeleting = true;
            tick();
          }, pauseAfterType);
          return;
        }
        timeoutId = setTimeout(tick, typingSpeed);
      } else {
        charIndex -= 1;
        setDisplayed(text.slice(0, charIndex));

        if (charIndex === 0) {
          timeoutId = setTimeout(() => {
            isDeleting = false;
            tick();
          }, pauseAfterDelete);
          return;
        }
        timeoutId = setTimeout(tick, deletingSpeed);
      }
    }

    timeoutId = setTimeout(tick, typingSpeed);

    return () => clearTimeout(timeoutId);
  }, [text, typingSpeed, deletingSpeed, pauseAfterType, pauseAfterDelete]);

  return displayed;
}

function SearchBox() {
  const typedPlaceholder = useTypewriter(TYPEWRITER_TEXT);

  return (
    <div className="acSearchBox">
      <svg
        className="acSearchIcon"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true">
        <circle cx="11" cy="11" r="7" />
        <path d="m20 20-3.5-3.5" />
      </svg>

      <input
        className="acSearchInput"
        type="search"
        placeholder={typedPlaceholder}
        aria-label="Tìm kiếm hướng dẫn"
      />
    </div>
  );
}

// ---- Dòng chỉ số tin cậy ----
function TrustRow() {
  return (
    <div className="acTrustRow">
      <div className="acTrustItem">
        <strong>15+</strong> năm phát triển
      </div>
      <div className="acTrustDivider" />
      <div className="acTrustItem">
        <strong>7.000+</strong> doanh nghiệp sử dụng
      </div>
    </div>
  );
}

function HomepageHero() {
  const {siteConfig} = useDocusaurusContext();

  return (
    <section className="acHero">
      <div className="acHeroInner">
        <div className="acHeroContent">
          <div className="acEyebrow">Tài liệu hướng dẫn sử dụng ACMan</div>

          <Heading as="h1" className="acHeroTitle">
            Làm kế toán trên{' '}
            <span className="acGlow">{siteConfig.title}</span>
            <br />
            đúng quy trình ngay từ bước đầu
          </Heading>

          <p className="acHeroSubtitle">
            Hướng dẫn thiết lập, nhập liệu, hạch toán, đối chiếu và xử lý
            nghiệp vụ trên phần mềm ACMan — được tổ chức theo từng loại hình
            doanh nghiệp và từng nghiệp vụ thực tế.
          </p>

          <TrustRow />

          <SearchBox />
        </div>

        <div className="acHeroVisual">
          <div className="acProductFrame">
            <img
              className="acProductImage"
              src="/img/acman-hero.png"
              alt="Giao diện phần mềm kế toán ACMan"
            />
          </div>

          <div
            className="acVisualIcon acVisualIconBook"
            aria-hidden="true"
            title="Tài liệu hướng dẫn">
            {Icons.book}
          </div>

          <div
            className="acVisualIcon acVisualIconChart"
            aria-hidden="true"
            title="Báo cáo">
            {Icons.chart}
          </div>
        </div>
      </div>
    </section>
  );
}

function DocTypeGrid() {
  return (
    <div className="acGridWrap">
      <div className="acGrid">
        {docTypes.map((doc) => (
          <Link key={doc.index} to={doc.href} className="acCard">
            <div className="acCardIndex">{doc.index}</div>
            <div className="acCardIcon">{doc.icon}</div>
            <div className="acCardTitle">
              {doc.title}
              {doc.comingSoon && <span className="acCardBadge">Sắp ra mắt</span>}
            </div>
            <div className="acCardDesc">{doc.desc}</div>
            <div className="acCardLink">
              {doc.comingSoon ? 'Sắp ra mắt' : 'Xem tài liệu'}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();

  return (
    <Layout
      title={siteConfig.title}
      description="Tài liệu hướng dẫn ACMan cho doanh nghiệp thương mại, sản xuất, xây dựng và dịch vụ">
      <main className="acHomeMain">
        <HomepageHero />
        <DocTypeGrid />
        <BannerChaomung />
      </main>
    </Layout>
  );
}