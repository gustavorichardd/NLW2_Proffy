import React, { FormEvent, useState } from 'react'

import PageHeader from '../../components/PageHeader'
import TeacherItem, { Teacher } from '../../components/TeacherItem'
import Select from '../../components/Select'
import Input from '../../components/Input'
import api from '../../services/api'

import './styles.css';

function TeacherList() {
  const [teachers, setTeachers] = useState([])
  const [subject, setSubject] = useState('')
  const [week_day, setWeekDay] = useState('')
  const [time, setTime] = useState('')

  function searhTeachers(event: FormEvent) {
    event.preventDefault();

    api.get('/classes', {
      params: {
        subject,
        week_day,
        time
      }
    }).then(teacherList => {
      setTeachers(teacherList.data);
    })

  }


  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="Estes são os proffys disponíveis.">
        <form id="search-teachers" onSubmit={searhTeachers}>
          <Select name="subject" label='Matéria'
            value={subject} onChange={e => { setSubject(e.target.value) }} options={[
              { value: 'Artes', label: 'Artes' },
              { value: 'Física', label: 'Física' },
              { value: 'Matemática', label: 'Matemática' },
              { value: 'Química', label: 'Química' },
              { value: 'Geografia', label: 'Geografia' },
              { value: 'Ed. Física', label: 'Ed. Física' },
              { value: 'Filosofia', label: 'Filosofia' },
              { value: 'Português', label: 'Português' }
            ]}
          />

          <Select name="week_day" label='Dia da Semana'
            value={week_day} onChange={e => { setWeekDay(e.target.value) }} options={[
              { value: '0', label: 'Domingo' },
              { value: '1', label: 'Segunda-feira' },
              { value: '2', label: 'Terça-feira' },
              { value: '3', label: 'Quarta-feira' },
              { value: '4', label: 'Quinta-feira' },
              { value: '5', label: 'Sexta-feira' },
              { value: '6', label: 'Sábado' },
            ]}
          />

          <Input type='time' name='time' label='hora'
            value={time} onChange={e => { setTime(e.target.value) }}
          />

          <button type='submit'>
            Buscar
          </button>
        </form>
      </PageHeader>

      <main>
        {teachers.map((teacher: Teacher) => {
          return <TeacherItem key={teacher.id} teacher={teacher} />
        })}
      </main>
    </div>
  )
}

export default TeacherList;