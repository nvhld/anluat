'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { ArrowRight, RotateCcw } from 'lucide-react';
import { legalSafetyMapQuestions } from '@/lib/public-content';

type AnswerState = {
  role?: string;
  concern?: string;
  stage?: string;
};

type Recommendation = {
  title: string;
  reason: string;
  primary: { label: string; href: string };
  secondary: { label: string; href: string };
};

function getRecommendation(answers: AnswerState): Recommendation | null {
  const { role, concern, stage } = answers;

  if (!role || !concern || !stage) {
    return null;
  }

  if (
    role === 'founder' ||
    role === 'hr' ||
    role === 'team' ||
    concern === 'operations' ||
    concern === 'prevention' ||
    stage === 'preventive'
  ) {
    return {
      title: 'Bạn nên bắt đầu từ một lớp rà soát hoặc định hướng cho doanh nghiệp.',
      reason:
        'Tín hiệu hiện tại nghiêng về phòng ngừa, chuẩn hóa nội bộ hoặc quyết định vận hành cần nhìn sớm trước khi đi sâu vào tranh chấp.',
      primary: { label: 'Xem hướng Legal Health Score', href: '/doanh-nghiep/ra-soat-phap-ly-noi-bo' },
      secondary: { label: 'Để thư ký An Luật gọi lại', href: '/lien-he' },
    };
  }

  if (concern === 'dispute' || stage === 'notice' || stage === 'escalating') {
    return {
      title: 'Vụ việc này nên đi qua secretary review trước.',
      reason:
        'Khi đã có tín hiệu căng, công văn hoặc tranh chấp leo thang, điều quan trọng là giữ đúng chứng cứ và mở đúng lối tiếp nhận ngay từ đầu.',
      primary: { label: 'Để thư ký An Luật gọi lại', href: '/lien-he' },
      secondary: { label: 'Xem nhóm tranh chấp phù hợp', href: '/tranh-tung-thu-hoi-no' },
    };
  }

  if (concern === 'family' || role === 'individual') {
    return {
      title: 'Bạn có thể phù hợp với 1 GIỜ GẶP NHƯ.',
      reason:
        'Nhóm vấn đề này thường cần một buổi định hướng riêng để sắp xếp lại câu chuyện, nhìn rõ hồ sơ và chọn bước tiếp theo bình tĩnh hơn.',
      primary: { label: 'Mở 1 GIỜ GẶP NHƯ', href: '/1-gio-gap-nhu' },
      secondary: { label: 'Xem lối vào cho cá nhân', href: '/ca-nhan' },
    };
  }

  if (concern === 'labor' || role === 'employee') {
    return {
      title: 'Bạn nên bắt đầu từ định hướng lao động thật gọn.',
      reason:
        'Với lao động và nhân sự, việc xác định đúng vị trí pháp lý của mình trước khi phản hồi thường quan trọng hơn việc đọc quá nhiều quy định cùng lúc.',
      primary: { label: 'Mở 1 GIỜ GẶP NHƯ', href: '/1-gio-gap-nhu' },
      secondary: { label: 'Xem lối vào lao động', href: '/lao-dong-nhan-su/nguoi-lao-dong' },
    };
  }

  return {
    title: 'Bạn có thể bắt đầu từ một lối vào ngắn, rồi để An Luật mở tiếp cửa phù hợp.',
    reason:
      'Tín hiệu hiện tại cho thấy bạn chưa cần một form dài. Một bước định hướng ngắn sẽ giúp phân loại chính xác hơn trước khi đi sâu.',
    primary: { label: 'Mở 1 GIỜ GẶP NHƯ', href: '/1-gio-gap-nhu' },
    secondary: { label: 'Để thư ký An Luật gọi lại', href: '/lien-he' },
  };
}

export default function LegalSafetyMap() {
  const [answers, setAnswers] = useState<AnswerState>({});

  const activeQuestionIndex = answers.role ? (answers.concern ? (answers.stage ? 3 : 2) : 1) : 0;
  const recommendation = useMemo(() => getRecommendation(answers), [answers]);

  return (
    <div className="rounded-[2rem] border border-border-subtle bg-white p-6 shadow-sm md:p-8">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-accent-gold">Bản đồ an toàn pháp lý</p>
          <h3 className="mt-3 font-heading text-3xl font-black text-brand-primary">
            Chọn 3 tín hiệu ngắn để mở đúng cửa.
          </h3>
          <p className="mt-3 max-w-2xl leading-relaxed text-text-secondary">
            Không cần gọi tên đúng điều luật. Bạn chỉ cần chọn điều gần nhất với mình để An Luật gợi ý lối vào phù hợp.
          </p>
        </div>

        <button
          type="button"
          onClick={() => setAnswers({})}
          className="inline-flex items-center gap-2 rounded-full border border-border-medium px-4 py-2 text-sm font-bold text-brand-primary transition-colors hover:bg-surface"
        >
          <RotateCcw size={14} />
          Làm lại
        </button>
      </div>

      <div className="mt-8 grid gap-4">
        {legalSafetyMapQuestions.map((question, index) => {
          const selectedValue = answers[question.id];
          const isLocked = index > activeQuestionIndex;

          return (
            <section
              key={question.id}
              className={`rounded-[1.75rem] border p-5 transition-colors md:p-6 ${
                isLocked ? 'border-border-subtle bg-surface/70 opacity-60' : 'border-border-medium bg-surface'
              }`}
            >
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-text-muted">Bước {index + 1}</p>
              <h4 className="mt-2 font-heading text-2xl font-bold text-brand-primary">{question.label}</h4>
              <p className="mt-2 text-sm leading-relaxed text-text-secondary">{question.helper}</p>

              <div className="mt-5 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
                {question.options.map((option) => {
                  const selected = selectedValue === option.value;

                  return (
                    <button
                      key={option.value}
                      type="button"
                      disabled={isLocked}
                      onClick={() =>
                        setAnswers((current) => {
                          if (question.id === 'role') {
                            return { role: option.value };
                          }

                          if (question.id === 'concern') {
                            return { ...current, concern: option.value, stage: undefined };
                          }

                          return { ...current, stage: option.value };
                        })
                      }
                      className={`rounded-[1.5rem] border px-4 py-4 text-left transition-all ${
                        selected
                          ? 'border-brand-secondary bg-brand-primary text-white shadow-sm'
                          : 'border-border-subtle bg-white text-brand-primary hover:border-brand-secondary hover:bg-stone-50'
                      } ${isLocked ? 'cursor-not-allowed' : ''}`}
                    >
                      <span className="block text-base font-bold">{option.label}</span>
                      <span className={`mt-2 block text-sm leading-relaxed ${selected ? 'text-white/75' : 'text-text-secondary'}`}>
                        {option.hint}
                      </span>
                    </button>
                  );
                })}
              </div>
            </section>
          );
        })}
      </div>

      {recommendation ? (
        <div id="goi-y-loi-vao" className="mt-8 rounded-[2rem] bg-brand-primary p-6 text-white md:p-8">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-accent-gold">Gợi ý lối vào</p>
          <h4 className="mt-3 font-heading text-3xl font-black">{recommendation.title}</h4>
          <p className="mt-4 max-w-2xl leading-relaxed text-white/78">{recommendation.reason}</p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link
              href={recommendation.primary.href}
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-5 py-3 text-sm font-bold text-brand-primary transition-colors hover:bg-stone-100"
            >
              {recommendation.primary.label}
              <ArrowRight size={15} />
            </Link>
            <Link
              href={recommendation.secondary.href}
              className="inline-flex items-center justify-center rounded-2xl border border-white/20 px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-white/10"
            >
              {recommendation.secondary.label}
            </Link>
          </div>
        </div>
      ) : null}
    </div>
  );
}
