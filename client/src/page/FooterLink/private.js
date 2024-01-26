import React from 'react';
import { NavLink } from 'react-router-dom';
import "./private.scss";

const Private = () => {

  return (
    <div id="container">
      <div className='content'>
        <div className='titletop'>
          <div className='inner'>
            <h1 className='dep11'>개인정보 처리방침</h1>
            <ul className='navlink'>
              <NavLink to="/"><li>Home</li></NavLink>
              <NavLink to="/#indexA"><li>개인정보 처리방침</li></NavLink>
            </ul>
          </div>
        </div>
        <div className='contara'>
          <div className='inner2'>
            <ul className='nevige'>
              <li><a href='#indexA'>개인정보 처리방침</a></li>
              <li><a href='#indexB'>가맹점 사업자 관련 개인정보 처리방침</a></li>
              <li><a href='#indexC'>정규직 지원자를 위한 개인정보 처리방침</a></li>
              <li><a href='#indexD'>영상정보처리기기 운영관리방침</a></li>
              <li><a href='#indexE'>이벤트 참여자를 위한 개인정보처리방침</a></li>
              <li><a href='#indexF'>기존 임대인 및 매장 유치 희망자를 위한 개인정보 처리방침</a></li>
            </ul>
            <div className='terms'>
              <h2 id='indexA'>개인정보처리방침</h2>
              <p>한국맥도날드 유한회사(이하 '회사')는 고객의 개인정보를 중요시하며, 정보통신망 이용촉진 및 정보보호 등에 관한 법률 및 개인정보보호법 등 고객의 개인정보 보호와 관련된 법령을 준수하고 있습니다. 회사는 본 개인정보취급/처리방침(이하 '본 방침')을 통하여 고객이 제공하는 개인정보가 어떠한 용도와 방식으로 이용되고 있으며, 개인정보보호를 위해 어떠한 조치가 취해지고 있는지 알려드립니다. 회사는 본 방침을 개정하는 경우 웹사이트를 통하여 변경내용과 그 이유를 지체 없이 공지할 것입니다.
                본 방침은 2021년 6월 15일부터 개정, 시행됩니다.</p>
              <h3>1. 회사가 수집하는 개인정보 항목과 수집,이용 목적, 수집방법은 무엇인가요?</h3>
              <p>맥딜리버리서비스(“MDS”) 제공을 위하여 전화주문시 고객이 제공하는 고객의 성명, 전화번호, 배달주소를 수집합니다.
                고객문의, 민원처리, 손해배상(보험처리) 등을 위하여 고객센터 전화, 홈페이지 1:1 고객문의, 우편접수를 통해 고객의 성명, 연락처, 이용매장명, 이메일 주소, 문의 또는 민원 사항, 손해증빙서류(진단서, 의무기록, 견적서, 영수증)상 기재된 개인정보를 수집합니다.
                매장/MDS오픈행사시 경품제공, 각종 이벤트 및 상품 관련 정보 제공을 위하여 응모권을 통해 고객의 성명, 연락처, 주소를 수집합니다.</p>
              <h2 id='indexB'>가맹점 사업자 관련 개인정보 처리방침</h2>
              <p>한국맥도날드 유한회사(이하 '회사')는 가맹점 지원자 및 사업자(이하 '가맹점 사업자')의 개인정보를 중요시하며, 정보통신망 이용촉진 및 정보보호 등에 관한 법률 및 개인정보보호법 등에 따라 가맹점 사업자의 개인정보 보호와 관련된 법령을 준수하고 있습니다. 회사는 본 개인정보처리방침(이하 '본 방침')을 통하여 가맹점 사업자가 제공하는 개인정보가 어떠한 용도와 방식으로 이용되고 있으며, 개인정보보호를 위해 어떠한 조치가 취해지고 있는지 알려드립니다. 회사는 본 방침을 개정하는 경우 웹사이트를 통하여 변경내용과 그 이유를 지체 없이 공지할 것입니다.</p>
              <h3>1. 회사가 수집하는 개인정보 항목과 수집,이용 목적, 수집방법은 무엇인가요?</h3>
              <p>회사는 가맹점 가맹점 사업자에 대한 자격 심사, 연락 업무, 가맹점주 선정자에 대한 교육, 가맹점 오픈 지원 업무, 가맹점 계약의 이행 및 가맹점 관리 업무 등 가맹점 관련 업무 처리 등을 위하여 맥도날드 가맹점소개 페이지나 관련 지원서의 우편, 이메일 접수 방법으로 다음과 같은 개인정보를 수집합니다.
                <br></br>
                <h4>온라인수집</h4>
                이름, 주소, 생년월일, 전화번호, 휴대번호, 이메일
                <br></br>
                <h4>오프라인 수집</h4>
                (필수적 정보) 이름, 사진, 연락처, 생년월일, 휴대전화번호, 이메일 주소, 은행계좌 사본, 인감증명서
                <br></br>
                (선택적 정보) 현재 및 이전 사업경력(직업, 회사명, 주소, 직위, 근무기간, 퇴사이유, 업무내용 및 부하직원의 수, 본인사업 및 대리점 경험, 사업실패 경험 유무), 혈연이나 지연으로 연결되어 있는 맥도날드 직원의 이름 및 관계, 맥도날드에 상품 또는 서비스 공급 여부, 맥도날드 매장 근무 경력, 맥도날드 대리점 지원 경력</p>
              <h2 id='indexC'>정규직 지원자를 위한 개인정보 처리방침</h2>
              <p>한국 맥도날드 유한회사 이하 '회사'는 귀하의 개인정보를 중요시하며, 개인정보보호법 등 개인정보 보호와 관련된 법령을 준수하고 있습니다. 회사는 개인정보처리방침을 통하여 귀하가 제공하는 개인정보가 어떠한 용도와 방식으로 이용되고 있으며, 개인정보보호를 위해 어떠한 조치가 취해지고 있는지 알려드립니다. 회사는 개인정보처리방침을 개정하는 경우 웹사이트 공지사항(또는 개별공지)을 통하여 공지할 것입니다.</p>
              <h3>1.개인정보 파기절차 및 방법은 어떻게 되나요?</h3>
              <p><h4>파기절차</h4>
              귀하가 제공한 정보는 목적이 달성된 후 별도의 DB로 옮겨져 내부 방침 및 기타 관련 법령에 의한 정보보호 사유에 따라(위 개인정보 보유 및 이용기간 참조) 일정 기간 저장된 후 파기됩니다.
              별도 DB로 옮겨진 개인정보는 법률에 의한 경우가 아니고서는 보유 목적 이외의 다른 목적으로 이용되지 않습니다.
              <h4>파기방법</h4>
              회사는 파기하여야 할 개인정보가 전자적 파일 형태인 경우 복원이 불가능한 방법으로 영구 삭제하며, 이외의 기록물, 인쇄물, 서면, 그 밖의 기록매체인 경우 파쇄 또는 소각합니다.</p>
              <h2 id='indexD'>영상정보처리기기 운영관리방침</h2>
              <h3>1. 영상정보 처리기기의 설치 근거 및 설치 목적</h3>
              <p>한국맥도날드 유한회사(이하 “회사”라고 합니다)는 개인정보보호법 제25조제1항에 따라 범죄의 예방, 시설 안전 및 화재 예방 등을 위하여 개인정보보호법에 근거하여 영상정보처리기기(이하 “CCTV”라고 합니다)를 설치, 운영하고 있습니다.</p>
              <h2 id='indexE'>이벤트 참여자를 위한 개인정보처리방침</h2>
              <p>한국 맥도날드 유한회사(이하 '회사')는 귀하의 개인정보를 중요시하며, 「개인정보 보호법」, 「정보통신망 이용촉진 및 정보보호 등에 관한 법률」 등 개인정보보호와 관련된 법령을 준수하고 있습니다. 회사는 개인정보처리방침을 통하여 귀하가 제공하는 개인정보가 어떠한 용도와 방식으로 이용되고 있으며, 개인정보보호를 위해 어떠한 조치가 취해지고 있는지 알려드립니다. 회사는 개인정보처리방침을 개정하는 경우 웹사이트 공지사항(또는 개별공지)을 통하여 공지할 것입니다.</p>
              <h3>1. 회사가 수집하는 개인정보 항목과 그 이용 목적은 무엇인가요?</h3>
              <p>회사는 회사는 “본 이벤트”의 진행(당첨자 선정, 안내, 경품 발송 등)을 위하여, 성명, 휴대폰번호를 수집하고 있습니다.</p>
              <h3>2. 개인정보 보유 및 이용기간은 얼마나 되나요?</h3>
              <p>수집한 개인정보는 회사가 진행하는 각 이벤트의 완료시까지 보관합니다. 다만 별도의 분쟁이 있거나 법령 등에서 별도로 보관기간을 정한 경우에는 그 목적 범위 내에서 보관합니다.</p>
              <h3>3. 개인정보 파기절차 및 방법은 어떻게 되나요?</h3>
              <p><h4>파기절차</h4>
              귀하가 제공한 정보는 목적이 달성된 후 별도의 DB로 옮겨져 내부 방침 및 기타 관련 법령에 의한 정보보호 사유에 따라(위 개인정보 보유 및 이용기간 참조) 일정 기간 저장된 후 파기됩니다.
              별도 DB로 옮겨진 개인정보는 법률에 의한 경우가 아니고서는 보유 목적 이외의 다른 목적으로 이용되지 않습니다.
              <h4>파기방법</h4>
              회사는 파기하여야 할 개인정보가 전자적 파일 형태인 경우 복원이 불가능한 방법으로 영구 삭제하며, 이외의 기록물, 인쇄물, 서면, 그 밖의 기록매체인 경우 파쇄 또는 소각합니다.</p>
              <h2 id='indexF'>기존 임대인 및 매장 유치 희망자를 위한 개인정보 처리방침</h2>
              <p>한국맥도날드 유한회사(이하 '회사')는 귀하의 개인정보를 중요시하며, 정보통신망 이용촉진 및 정보보호 등에 관한 법률 및 개인정보보호법 등 귀하의 개인정보 보호와 관련된 법령을 준수하고 있습니다. 회사는 본 개인정보처리방침(이하 '본 방침')을 통하여 귀하가 제공하는 개인정보가 어떠한 용도와 방식으로 이용되고 있으며, 개인정보보호를 위해 어떠한 조치가 취해지고 있는지 알려드립니다. 회사는 본 방침을 개정하는 경우 웹사이트를 통하여 변경내용과 그 이유를 지체 없이 공지할 것입니다.</p>
              <h3>1.고객과 법정대리인은 어떠한 권리가 있으며, 권리행사는 어떻게 해야 하나요?</h3>
              <p>귀하 및 그 법정대리인은 언제든지 자신의 개인정보를 열람하거나 정정할 수 있으며, 개인정보의 삭제를 요청할 수도 있습니다. 이러한 열람, 정정, 삭제를 원하는 경우 아래 고객센터 또는 개인정보보호책임자에게 연락하시면 지체 없이 조치하겠습니다.
또한 개인정보의 오류에 대한 정정을 요청하신 경우에는 정정을 완료하기 전까지 당해 개인정보를 이용 또는 제공하지 않습니다. 또한 잘못된 개인정보를 제3자에게 이미 제공한 경우에는 정정 처리결과를 제3자에게 지체 없이 통지하여 정정이 이루어지도록 하겠습니다.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Private;
