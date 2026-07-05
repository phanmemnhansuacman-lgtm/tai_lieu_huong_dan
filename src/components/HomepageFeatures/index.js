import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Phần mềm',
    image: require('@site/static/img/anh-bia-phan-mem.png').default,
    description: (
      <>
        Phần mềm ACMan được thiết kế với giao diện thân thiện, dễ sử dụng giúp người dùng tiết kiệm được tối đa thời gian sử dụng
      .
      </>
    ),
  },
  {
    title: 'Tư vấn',
    image: require('@site/static/img/anh-bia-tu-van.png').default,
    description: (
      <>
        Đội ngũ chuyên gia luôn đồng hành giải đáp mọi vướng mắc liên quan đến thuế, tài chính, hỗ trợ tư vấn giải pháp phù hợp với từng doanh nghiệp.
      </>
    ),
  },
  {
    title: 'Đào tạo',
    image: require('@site/static/img/anh-bia-dao-tao.png').default,
    description: (
      <>
        Chương trình đào tạo sát thực tế như bạn đang làm công việc của một kế toán thực thụ, đồng hàng để bạn tự tin trên con đường làm nghề.
      </>
    ),
  },
];

function Feature({image, Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        {image ? (
          <img src={image} className={styles.featureSvg} alt={title} />
        ) : (
          <Svg className={styles.featureSvg} role="img" />
        )}
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
