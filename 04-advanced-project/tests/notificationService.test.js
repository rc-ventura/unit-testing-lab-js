/**
 * notificationService.test.js
 * Testes — Sistema de Notificações
 *
 * Escreva os testes para o `NotificationService`.
 * Mínimo exigido: 10 testes.
 *
 * Cenários que devem ser cobertos obrigatoriamente:
 *  - formatMessage()  : formata a mensagem com nome do usuário e evento
 *  - notify()         : retorna { success: true } para usuário válido
 *  - notify()         : chama `emailService.send` com os argumentos corretos
 *  - notify()         : chama `logger.log` após enviar a notificação
 *  - notify()         : lança erro para usuário sem nome
 *  - notify()         : lança erro para usuário sem e-mail
 *  - notify()         : rejeita quando o emailService falha
 *  - notify()         : não chama `logger.log` quando o usuário é inválido
 *  - notifyMany()     : chama notify() para cada usuário da lista
 *  - beforeEach       : estado do mock é resetado entre testes
 *
 * Estrutura sugerida:
 *
 *   describe('NotificationService', () => {
 *     let service
 *     let mockEmail
 *
 *     beforeEach(() => {
 *       mockEmail = { send: vi.fn().mockResolvedValue(true) }
 *       service = new NotificationService(mockEmail)
 *     })
 *
 *     it('deve formatar a mensagem corretamente', () => {
 *       // Arrange
 *       // Act
 *       // Assert
 *     })
 *   })
 */

import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest'
import { NotificationService } from '../src/notificationService.js'
import { logger } from '../src/logger.js'

// escreva seus testes aqui