import {useState, useEffect} from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import BannerChaomung from '@site/src/components/BannerChaomung';

const docTypes = [
  {
    index: '01',
    icon: '🛒',
    title: 'Thương mại',
    desc: 'Mua bán hàng hóa, quản lý kho, chiết khấu, hóa đơn đầu vào — đầu ra theo đúng nghiệp vụ thương mại.',
    href: '/docs/doanh_nghiep_thuong_mai/phan-1-thiet-lap-chung/1.1-cai-dat-va-cac-thiet-lap-can-ban/1.1.1-cai-dat-chuong-trinh-phan-mem-acman-9.1',
  },
  {
  index: '02',
  icon: '⚙️',
  title: 'Sản xuất',
  desc: 'Giá thành sản phẩm, định mức nguyên vật liệu, chi phí sản xuất dở dang và nhập kho thành phẩm.',
  href: '/coming-soon?muc=Sản xuất',
  comingSoon: true,
},
  {
    index: '03',
    icon: '🏗️',
    title: 'Xây dựng',
    desc: 'Hạch toán theo công trình, chi phí dở dang xây lắp, nghiệm thu và quyết toán từng hạng mục.',
    href: '/coming-soon?muc=Xây dựng',
  },
  {
    index: '04',
    icon: '🤝',
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
            📖
          </div>

          <div
            className="acVisualIcon acVisualIconChart"
            aria-hidden="true"
            title="Báo cáo">
            📊
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