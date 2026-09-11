import React, {useState, useEffect} from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

const DEFAULT_MODULE = 'Hộ kinh doanh';

export default function ComingSoonPage() {
  const [moduleName, setModuleName] = useState(DEFAULT_MODULE);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const params = new URLSearchParams(window.location.search);
    const mucParam = params.get('muc');
    if (mucParam) {
      setModuleName(mucParam);
    }
  }, []);

  return (
    <Layout title="Sắp ra mắt" description="Tài liệu sẽ mở lại khi hoàn thiện">
      <main style={{
        maxWidth: 760,
        margin: '80px auto',
        padding: '0 24px',
        textAlign: 'center',
        lineHeight: 1.7,
      }}>
        <div style={{ fontSize: 64, marginBottom: 16 }}>🚧</div>
        <h1 style={{ fontSize: '2.5rem', marginBottom: 16 }}>Nội dung đang được cập nhật</h1>
        <p style={{ fontSize: '1.1rem', color: '#4b5563' }}>
          Mục <strong>{moduleName}</strong> hiện đang trong giai đoạn chuẩn bị và sẽ được ra mắt chính thức trong thời gian tới.
        </p>
        <p style={{ fontSize: '1rem', color: '#6b7280', marginBottom: 28 }}>
          Quý khách vui lòng quay lại sau hoặc xem các phần nội dung đang hoạt động khác trên website.
        </p>
        <Link to="/" className="button button--primary">
          Quay về trang chủ
        </Link>
      </main>
    </Layout>
  );
}